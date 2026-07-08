import { CheckCircle2 } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] translate-x-4 -translate-y-4 -z-10" />
          <img
            src="https://modern-connect-page.lovable.app/__l5e/assets-v1/ab6681c1-d1ba-452b-a812-a9df217b1cd3/arilson.jpg"
            alt="Arilson Brito - Fundador"
            className="rounded-[2rem] shadow-xl w-full max-w-md mx-auto lg:max-w-none object-cover aspect-[4/5]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-2">
            Quem Somos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Tradição, Tecnologia e Atendimento Humano.
          </h3>

          <div className="space-y-4 text-slate-600 text-lg mb-8 leading-relaxed">
            <p>
              Fundada por <strong>Arilson Brito</strong> em 1998, a ABN Contábil nasceu com um
              propósito claro: ser mais do que um gerador de guias de impostos, mas sim um parceiro
              estratégico para empresários de Brasília.
            </p>
            <p>
              Acreditamos que a contabilidade deve falar a língua do empreendedor. Traduzimos
              números complexos em decisões inteligentes para o seu negócio prosperar com segurança.
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              'Atendimento 100% humanizado via WhatsApp',
              'Reuniões de acompanhamento de resultados',
              'Tecnologia integrada para gestão em tempo real',
              'Equipe técnica atualizada com a legislação',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
