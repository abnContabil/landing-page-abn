import { Briefcase, Building, Calculator, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const services = [
  {
    icon: Building,
    title: 'Abertura de Empresa',
    description: 'Inicie seu negócio com o pé direito, na tributação correta desde o dia 1.',
    benefits: ['Análise de viabilidade', 'Escolha do melhor regime', 'Processo 100% digital'],
  },
  {
    icon: Briefcase,
    title: 'Contabilidade PJ',
    description: 'Gestão contábil completa para prestadores de serviço e profissionais liberais.',
    benefits: [
      'Emissão de notas fiscais',
      'Cálculo de guias de impostos',
      'Atendimento humanizado',
    ],
  },
  {
    icon: Calculator,
    title: 'Planejamento Tributário',
    description: 'Reduza legalmente a carga de impostos da sua empresa e aumente o lucro.',
    benefits: [
      'Revisão fiscal profunda',
      'Recuperação de créditos',
      'Estratégias legais de economia',
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-2">
            Nossos Serviços
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Soluções pensadas para o seu momento
          </h3>
          <p className="text-muted-foreground text-lg">
            Da abertura à consolidação do seu negócio, temos a expertise necessária para guiar sua
            jornada empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
                >
                  Quero saber mais{' '}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
