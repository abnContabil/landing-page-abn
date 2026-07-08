import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Dr. Carlos Mendes',
    role: 'Diretor Clínico',
    text: 'Depois que mudamos para a ABN, descobrimos que estávamos pagando impostos a mais. O planejamento tributário deles salvou o caixa da nossa clínica.',
    stars: 5,
  },
  {
    name: 'Juliana Silva',
    role: 'Agência de Marketing',
    text: 'Agilidade impressionante. Sempre que tenho uma dúvida no WhatsApp, a equipe responde na hora e resolve sem complicação técnica.',
    stars: 5,
  },
  {
    name: 'Roberto Almeida',
    role: 'E-commerce',
    text: 'A abertura da minha empresa foi super rápida. Fui orientado desde o início sobre o melhor formato jurídico. Recomendo de olhos fechados.',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h3>
          <p className="text-slate-300">
            Empresas de Brasília que confiam na ABN Contábil para crescerem com segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-white/10 border-none text-white hover:-translate-y-2 transition-transform duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={cn(
                        'w-5 h-5',
                        j < t.stars ? 'fill-secondary text-secondary' : 'text-slate-400',
                      )}
                    />
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed mb-6 italic text-slate-100">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-secondary">{t.name}</p>
                  <p className="text-sm text-slate-300">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
