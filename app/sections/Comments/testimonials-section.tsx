import { MarqueeDemo } from "@/components/marquee-demo"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{fontFamily: 'SF Regular, sans-serif'}} className="text-5xl md:text-6xl font-light tracking-wider text-white mb-6">Comentarios</h2>
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
            Descubre lo que nuestros clientes dicen sobre su experiencia con nuestros servicios de lujo
          </p>
        </div>

        <MarqueeDemo />
      </div>
    </section>
  )
}
