import HomeSection from './sections/Home/HomeSection'
import ServicesSection from './sections/Services/ServicesSection'
import Testimonials from './sections/Comments/testimonials-section'
import PricingSection from './sections/Pricing/pricing-section'
import Fondo from '@/components/fondo'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <Testimonials />
      
      {/* Footer Reveal Effect with Fondo at 90vh */}
      <div className="relative h-[90vh]">
        {/* Content that slides up to reveal the fondo */}
        <div className="relative z-20 bg-black">
          <PricingSection />
        </div>
        
        {/* Sticky Fondo fixed at 90vh */}
        <div className="sticky bottom-0 h-[40vh] w-full overflow-hidden">
  <div className="w-full h-full scale-160 transform origin-center -translate-y-25">
    <Fondo />
  </div>
</div>


      </div>
    </>
  )
}