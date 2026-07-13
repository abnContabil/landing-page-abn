import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, Send, MapPin, Phone, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { insertLead, sendLeadEmail } from '@/services/leads'
import {
  WHATSAPP_URL,
  buildWhatsAppMessage,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
  GOOGLE_MAPS_URL,
} from '@/lib/constants'

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  whatsapp: z.string().min(10, 'Digite um número de WhatsApp válido'),
  email: z.string().email('Digite um e-mail válido'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  regime: z.string().min(1, 'Selecione o tipo de empresa/regime'),
  revenue: z.string().min(1, 'Selecione o faturamento'),
  message: z.string().optional(),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      whatsapp: '',
      email: '',
      company: '',
      regime: '',
      revenue: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const { data, error } = await insertLead({
        nome: values.name,
        whatsapp: values.whatsapp,
        email: values.email,
        empresa: values.company,
        regime: values.regime,
        faturamento_mensal: values.revenue,
        mensagem: values.message || null,
      })

      if (error) throw error

      if (data?.id) {
        const { error: emailError } = await sendLeadEmail(data.id)
        if (emailError) {
          console.error('Email notification failed:', emailError)
        }
      }

      toast({
        title: 'Solicitação enviada com sucesso!',
        description: 'Você será redirecionado para o nosso WhatsApp.',
      })

      const waUrl = buildWhatsAppMessage({
        nome: values.name,
        empresa: values.company,
        faturamento: values.revenue,
        regime: values.regime,
        mensagem: values.message,
      })

      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer')
        form.reset()
      }, 1500)
    } catch {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou nos chame diretamente no WhatsApp.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Preencha o formulário para agendarmos o seu <strong>Diagnóstico Gratuito</strong>.
            Analisaremos sua situação atual e mostraremos exatamente onde você pode economizar e
            melhorar sua gestão.
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 mb-4">O que acontece depois?</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <strong>1.</strong> Entraremos em contato via WhatsApp em até 2h úteis.
              </li>
              <li className="flex gap-2">
                <strong>2.</strong> Agendamos uma rápida reunião online ou presencial.
              </li>
              <li className="flex gap-2">
                <strong>3.</strong> Apresentamos um plano de ação claro para sua empresa.
              </li>
            </ul>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3"
            >
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>{COMPANY_ADDRESS}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>{COMPANY_PHONE}</span>
            </a>
            <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>{COMPANY_EMAIL}</span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-elevation border border-slate-100 p-6 md:p-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Solicite seu Diagnóstico</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="João Silva" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(61) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail corporativo</FormLabel>
                      <FormControl>
                        <Input placeholder="joao@empresa.com.br" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Minha Empresa Ltda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="regime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de empresa/regime</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="MEI">MEI</SelectItem>
                          <SelectItem value="Simples Nacional">Simples Nacional</SelectItem>
                          <SelectItem value="Lucro Presumido">Lucro Presumido</SelectItem>
                          <SelectItem value="Lucro Real">Lucro Real</SelectItem>
                          <SelectItem value="Ainda não tenho empresa">
                            Ainda não tenho empresa
                          </SelectItem>
                          <SelectItem value="Não sei informar">Não sei informar</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Faturamento mensal aproximado</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Até R$ 10.000">Até R$ 10.000</SelectItem>
                          <SelectItem value="De R$ 10.001 a R$ 50.000">
                            De R$ 10.001 a R$ 50.000
                          </SelectItem>
                          <SelectItem value="De R$ 50.001 a R$ 200.000">
                            De R$ 50.001 a R$ 200.000
                          </SelectItem>
                          <SelectItem value="Acima de R$ 200.000">Acima de R$ 200.000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Como podemos ajudar no momento atual da sua empresa?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full rounded-full h-12 text-lg bg-primary hover:bg-primary/90 mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Solicitar Diagnóstico Gratuito
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
