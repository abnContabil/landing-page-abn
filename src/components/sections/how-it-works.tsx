import { MessageSquare, Search, FileText, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Conversa Inicial',
    desc: 'Entendemos seu negócio e suas dores atuais em um bate-papo sem compromisso.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Diagnóstico Gratuito',
    desc: 'Avaliamos sua situação fiscal e encontramos oportunidades de melhoria e economia.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Proposta sob Medida',
    desc: 'Apresentamos um plano de ação claro, com valores transparentes e sem surpresas.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Migração Organizada',
    desc: 'Cuidamos de toda a transição com seu contador anterior, sem dor de cabeça.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-2">
            Processo Simples
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            Como funciona nossa parceria
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-[2px] bg-slate-100 -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-md flex items-center justify-center mb-6 relative z-10 group-hover:border-secondary transition-colors duration-300">
                <step.icon className="w-10 h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-primary font-bold rounded-full flex items-center justify-center text-sm shadow-sm">
                  {step.num}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
