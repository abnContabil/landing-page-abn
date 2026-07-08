import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
import { FloatingWhatsApp } from './floating-whatsapp'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-background">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
