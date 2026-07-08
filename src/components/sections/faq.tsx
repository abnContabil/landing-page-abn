import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'É difícil trocar de contador?',
    a: 'Não! Nós cuidamos de todo o processo de transição para você. Entramos em contato com seu contador anterior, solicitamos as documentações e fazemos a migração de forma segura e sem interrupções no seu negócio.',
  },
  {
    q: 'A ABN Contábil atende empresas de fora de Brasília?',
    a: 'Nosso foco principal é no Distrito Federal e entorno para garantir um atendimento mais próximo, mas com o avanço da contabilidade digital, atendemos empresas de serviços de diversas regiões do Brasil.',
  },
  {
    q: 'Qual o valor dos honorários contábeis?',
    a: 'Nossos honorários são personalizados de acordo com o porte, regime de tributação e volume de movimentações da sua empresa. Faça um diagnóstico gratuito conosco para receber uma proposta exata e sem surpresas.',
  },
  {
    q: 'Vocês fazem abertura de empresa?',
    a: 'Sim! Cuidamos de todo o processo burocrático de abertura, desde a consulta de viabilidade, elaboração do contrato social, até a emissão do CNPJ e alvarás necessários.',
  },
  {
    q: 'Como é feito o atendimento no dia a dia?',
    a: 'Nosso atendimento é humanizado e ágil. Você terá acesso direto a nossa equipe técnica via WhatsApp, e-mail e telefone, sem robôs ou chamados demorados.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-600">
            Tudo o que você precisa saber antes de se tornar nosso cliente.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white rounded-2xl shadow-sm border p-4 md:p-8"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b-slate-100 last:border-0">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
