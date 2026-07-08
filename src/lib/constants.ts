export const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=556135612665&text=Ol%C3%A1%2C%20quero%20fazer%20um%20diagn%C3%B3stico%20gratuito%20com%20a%20ABN%20Cont%C3%A1bil.'
export const WHATSAPP_PHONE = '556135612665'
export const INSTAGRAM_URL = 'https://www.instagram.com/abncontabil/'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/abn-contabil/'
export const COMPANY_EMAIL = 'contato@abncontabil.com.br'
export const COMPANY_PHONE = '(61) 3561-2665'
export const COMPANY_ADDRESS = 'C 11 Lote 3 a 5 Loja 4 - Taguatinga DF - Cep: 72.010-110'
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=ABN+Contabil+Taguatinga+DF'

export function buildWhatsAppMessage(data: {
  nome: string
  empresa: string
  faturamento: string
  regime: string
  mensagem?: string
}): string {
  const text = `Olá, meu nome é ${data.nome} da empresa ${data.empresa}. Gostaria de um diagnóstico. Faturamento: ${data.faturamento}, Regime: ${data.regime}.${data.mensagem ? ` Mensagem: ${data.mensagem}` : ''}`
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`
}
