import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react'
import { INSTAGRAM_URL, LINKEDIN_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[#052B3A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <img
            src="https://modern-connect-page.lovable.app/__l5e/assets-v1/553d6e9d-c6dd-4780-aa6e-7e0c8d8b09d6/abn-logo.jpg"
            alt="ABN Contábil Logo"
            className="h-12 w-auto object-contain bg-white rounded p-1"
          />
          <p className="text-slate-300 text-sm leading-relaxed">
            Contabilidade estratégica focada em resultados. Desburocratizamos a gestão do seu
            negócio para você focar no que realmente importa: crescer.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-secondary">Serviços</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">
                Abertura de Empresa
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">
                Contabilidade PJ
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">
                Planejamento Tributário
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">
                BPO Financeiro
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-secondary">Contato</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary" />
              <span>(61) 3561-2665</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary" />
              <span>contato@abncontabil.com.br</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1" />
              <span>
                C 11 Lote 3 a 5 Loja 4
                <br />
                Taguatinga DF - Cep: 72.010-110
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-secondary">Redes Sociais</h3>
          <div className="flex gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-[#052B3A] transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-[#052B3A] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} ABN Contábil Ltda. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
