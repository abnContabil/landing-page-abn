export const WHATSAPP_PHONE = '556135612665'

const WHATSAPP_DEFAULT_MESSAGE = 'Olá, quero fazer um diagnóstico gratuito com a ABN Contábil.'

export const WHATSAPP_URL = `https://wa.me/556135612665?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
export const INSTAGRAM_URL = 'https://www.instagram.com/abncontabil/'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/abn-contabil/'
export const COMPANY_EMAIL = 'contato@abncontabil.com.br'
export const COMPANY_PHONE = '(61) 3561-2665'
export const COMPANY_ADDRESS = 'C 11 Lote 3 a 5 Loja 4 - Taguatinga DF - Cep: 72.010-110'
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=ABN+Contabil+Taguatinga+DF'

export function buildWhatsAppMessage(dados: {
  nome: string
  empresa: string
  mensagem?: string
}): string {
  let mensagem = `Olá, meu nome é ${dados.nome}, da empresa ${dados.empresa}. Gostaria de um diagnóstico gratuito.`
  if (dados.mensagem) {
    mensagem += ` ${dados.mensagem}`
  }
  return `https://wa.me/556135612665?text=${encodeURIComponent(mensagem)}`
}
