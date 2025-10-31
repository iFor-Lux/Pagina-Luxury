import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import { GridPatternDashed } from "@/components/grid-pattern-dashed"
import { Shield, Zap, Crown, Gem } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{fontFamily: 'SF Regular, sans-serif'}} className="text-5xl md:text-6xl font-light tracking-wider text-white mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60 mb-6"></div>
          <p style={{
            fontSize: '1rem',
            color: 'rgb(212 212 212)',
            fontWeight: 'lighter',
            letterSpacing: '0.05em',
            margin: '0 auto',
            lineHeight: '1.5',
            maxWidth: '42rem',
            fontFamily: 'Apple, sans-serif'
          }}>
            Conoce nuestros servicios y descubre como podemos ayudarte a mejorar tu juego.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-2 auto-rows-[35rem]">
          <BentoCard
            name="Atencion Exclusiva"
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black" />
            }
            Icon={Gem}
            description="Soporte 24/7 para resolver cualquier duda"
            href="#"
            iconColor="#2563eb"
                          image={
                <img src="/2.svg" alt="Atención Exclusiva" className="w-4/4 h-3/4 object-contain mx-auto -mt-20" />
              }
          />
          <BentoCard
            name="Funciones Premium"
            className="col-span-3 lg:col-span-2"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />
            }
            Icon={Crown}
            description="Las mejores funciones para tu cuenta"
            href="#"
            iconColor="#dc2626"
                          image={
                <img src="/3.svg" alt="Atención Exclusiva" className="w-4/4 h-3/4 object-contain mx-auto -mt-20" />
              }
          />
          <BentoCard
            name="VIP Protección"
            className="col-span-3 lg:col-span-2"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black" />
            }
            Icon={Shield}
            description="Seguridad de alta calidad para proteger tu cuenta"
            href="#"
            iconColor="#16a34a"
                          image={
                <img src="/4.svg" alt="Atención Exclusiva" className="w-4/4 h-3/4 object-contain mx-auto -mt-20" />
              }
          />
          <BentoCard
            name="Instalacion Rapida"
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
            }
            Icon={Zap}
            description="Compatible con todos los dispositivos"
            href="#"
            iconColor="#9333ea"
                          image={
                <img src="/1.svg" alt="Atención Exclusiva" className="w-5/4 h-6/4 object-contain mx-auto -mt-20" />
              }
          />
        </BentoGrid>
      </div>
    </section>
  )
}
