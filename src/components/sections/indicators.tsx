import { Building2, CalendarDays, ShieldCheck, Star } from 'lucide-react'

const indicators = [
  { icon: Building2, value: '500+', label: 'Empresas atendidas' },
  { icon: CalendarDays, value: '25 Anos', label: 'De mercado' },
  { icon: ShieldCheck, value: '100%', label: 'Legal e regular' },
  { icon: Star, value: '4.9/5', label: 'Avaliação dos clientes' },
]

export function Indicators() {
  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {indicators.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0"
            >
              <div className="bg-white/10 p-3 rounded-full mb-4 text-secondary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-1">{item.value}</h3>
              <p className="text-sm text-slate-300 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
