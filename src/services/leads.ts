import { supabase } from '@/lib/supabase/client'
import type { TablesInsert } from '@/lib/supabase/types'

export type LeadData = {
  nome: string
  whatsapp: string
  email: string | null
  empresa: string | null
  regime: string | null
  faturamento_mensal: string | null
  mensagem: string | null
}

export async function insertLead(data: LeadData) {
  const { data: leadId, error } = await supabase.rpc('abn_criar_site_lead', {
    p_nome: data.nome,
    p_whatsapp: data.whatsapp,
    p_email: data.email,
    p_empresa: data.empresa,
    p_regime: data.regime,
    p_faturamento_mensal: data.faturamento_mensal,
    p_mensagem: data.mensagem,
  })

  if (error) {
    console.error('insertLead RPC error:', error)
    return { data: null, error }
  }

  if (!leadId) {
    const noIdError = new Error('RPC did not return a lead ID')
    console.error('insertLead: no leadId returned')
    return { data: null, error: noIdError }
  }

  return { data: leadId as string, error: null }
}

export async function sendLeadEmail(leadId: string) {
  const { data, error } = await supabase.functions.invoke('send-site-lead-email', {
    body: { lead_id: leadId },
  })

  if (error) {
    console.error('sendLeadEmail error for lead_id:', leadId, error)
  }

  return { data, error }
}
