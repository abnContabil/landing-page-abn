import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingDown, Users, ChevronRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background -z-10" />

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <Badge
            variant="outline"
            className="border-secondary text-secondary-foreground px-3 py-1 bg-secondary/10 mb-6"
          >
            Contabilidade estratégica desde 1998
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
            Menos impostos.
            <br />
            <span className="text-secondary">Mais crescimento.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Desburocratizamos a gestão da sua empresa com linguagem simples e estratégias que podem
            reduzir significativamente sua carga tributária.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-secondary text-primary hover:bg-secondary/90 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Diagnóstico Gratuito
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border-primary/20 hover:bg-primary/5 transition-all"
            >
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-primary">
                <Users className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-white" />
            </div>
            <p>+500 empresas atendidas em Brasília e região</p>
          </div>
        </div>

        <div
          className="relative lg:ml-auto animate-fade-in lg:mt-0 mt-8"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl translate-x-4 translate-y-4 -z-10" />
          <img
            src="https://modern-connect-page.lovable.app/assets/hero-CIA0Wr3c.jpg"
            alt="Escritório de Contabilidade Moderno"
            className="rounded-3xl shadow-2xl object-cover w-full h-auto aspect-[4/3] lg:aspect-square"
          />

          <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-5 rounded-2xl shadow-elevation flex items-center gap-4 animate-float border border-slate-100">
            <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg md:text-xl text-primary">Até 40%</p>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                de economia tributária média
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
