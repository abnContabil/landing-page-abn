import { Hero } from '@/components/sections/hero'
import { Indicators } from '@/components/sections/indicators'
import { Services } from '@/components/sections/services'
import { HowItWorks } from '@/components/sections/how-it-works'
import { About } from '@/components/sections/about'
import { Testimonials } from '@/components/sections/testimonials'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'

const Index = () => {
  return (
    <>
      <Hero />
      <Indicators />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}

export default Index
