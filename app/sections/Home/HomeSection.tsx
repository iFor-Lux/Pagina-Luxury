import Background from "@/components/background"
import { MorphingText } from "@/components/magicui/morphing-text";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function HomeSection() {
  return (
    <main id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#070708'
    }}>
      <Background />

      {/* Contenedor principal del contenido */}
      <div style={{
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1200px',
        padding: '2rem',
        boxSizing: 'border-box'
      }}>

        {/* Contenedor del título */}
        <div className="title-container-mobile" style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            margin: 0,
            padding: 0,
            fontSize: '3rem',
            textIndent: '0.5em',
            textAlign: 'center',
            width: '100%',
          }}>
            <MorphingText texts={["Luxury", "Regedit"]} />
          </h1>
        </div>

        {/* Línea decorativa */}
          <div style={{
            width: '8rem',
            height: '1px',
            margin: '1.5rem 0',
            background: 'linear-gradient(to right, transparent, white, transparent)',
            opacity: 0.8
          }}></div>

        {/* Contenedor del subtítulo */}
        <div style={{
          width: '100%',
          maxWidth: '32rem',
          marginBottom: '3rem'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            color: 'white', 
            fontWeight: 'lighter', 
            letterSpacing: '0.05em', 
            margin: 0,
            lineHeight: '1.5',
            textAlign: 'center',
            fontFamily: 'Apple, sans-serif',
          }}>
            Siempre entregando productos de la más alta calidad y un servicio excepcional a nuestros clientes.
          </p>
        </div>

        {/* Botón */}
        <button style={{ 
          padding: '0.5rem 2rem', 
          border: '1px solid rgba(255, 255, 255, 0.3)', 
          color: 'white', 
          fontWeight: 'lighter', 
          letterSpacing: '0.1em', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          transition: 'all 0.3s ease', 
          backdropFilter: 'blur(5px)',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: 'SF Regular, sans-serif',
        }}>
          Comprar
        </button>
      </div>
    </main>
  )
}