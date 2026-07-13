import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'jsr:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const RECIPIENT_EMAIL = 'contato@abncontabil.com.br'
const FROM_EMAIL = 'noreply@abncontabil.com.br'

function formatDateTime(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function buildEmailBody(lead: Record<string, unknown>): string {
  const mensagem = lead.mensagem ? String(lead.mensagem) : '—'
  return `Novo pedido de diagnóstico recebido pelo site da ABN Contábil.

Nome: ${lead.nome ?? '—'}
WhatsApp: ${lead.whatsapp ?? '—'}
E-mail: ${lead.email ?? '—'}
Empresa: ${lead.empresa ?? '—'}
Regime tributário: ${lead.regime ?? '—'}
Faturamento mensal: ${lead.faturamento_mensal ?? '—'}

Mensagem:
${mensagem}

Data da solicitação:
${formatDateTime(String(lead.created_at ?? new Date().toISOString()))}`
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const body = await req.json()
    const { lead_id } = body as { lead_id?: string }

    if (!lead_id) {
      return new Response(JSON.stringify({ error: 'lead_id is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { data: lead, error: fetchError } = await supabaseAdmin
      .from('site_leads')
      .select('nome, whatsapp, email, empresa, regime, faturamento_mensal, mensagem, created_at')
      .eq('id', lead_id)
      .single()

    if (fetchError || !lead) {
      return new Response(JSON.stringify({ error: 'Lead not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      const errMsg = 'RESEND_API_KEY is not configured'
      await supabaseAdmin
        .from('site_leads')
        .update({ email_notification_error: errMsg })
        .eq('id', lead_id)

      return new Response(JSON.stringify({ error: errMsg }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const emailBody = buildEmailBody(lead)

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: RECIPIENT_EMAIL,
        subject: 'Novo pedido de diagnóstico gratuito - ABN Contábil',
        text: emailBody,
      }),
    })

    if (!resendResponse.ok) {
      const errText = await resendResponse.text()
      await supabaseAdmin
        .from('site_leads')
        .update({
          email_notification_error: `Resend API error: ${resendResponse.status} - ${errText}`,
        })
        .eq('id', lead_id)

      return new Response(JSON.stringify({ error: 'Failed to send email', details: errText }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    await supabaseAdmin
      .from('site_leads')
      .update({
        email_notification_sent: true,
        email_notification_sent_at: new Date().toISOString(),
        email_notification_error: null,
      })
      .eq('id', lead_id)

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
