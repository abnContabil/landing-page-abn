import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevation hover:bg-[#20bd5a] transition-all duration-300 animate-pulse-soft hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
