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
    origem: 'landing_page',
    status: 'novo',
  }

  const { data: result, error } = await supabase.from('site_leads').insert(lead).select().single()

  return { data: result, error }
}
