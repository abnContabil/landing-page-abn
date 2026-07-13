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
  const lead: TablesInsert<'site_leads'> = {
    nome: data.nome,
    whatsapp: data.whatsapp,
    email: data.email,
    empresa: data.empresa,
    regime: data.regime,
    faturamento_mensal: data.faturamento_mensal,
    mensagem: data.mensagem,
    origem: 'site_abn_contabil',
    status: 'novo',
  }

  const { error } = await supabase.from('site_leads').insert(lead)

  return { data: null, error }
}

export async function sendLeadEmail(leadId: string) {
  const { error } = await supabase.functions.invoke('send-site-lead-email', {
    body: { lead_id: leadId },
  })

  return { error }
}
