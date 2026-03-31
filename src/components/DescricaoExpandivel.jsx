import { useState, useRef, useLayoutEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './DescricaoExpandivel.css'

export default function DescricaoExpandivel({ texto, maxLinhas = 3 }) {
  const [expandido, setExpandido] = useState(false)
  const [altura, setAltura] = useState(0)
  const [alturaCompleta, setAlturaCompleta] = useState(0)
  const [precisaExpandir, setPrecisaExpandir] = useState(false)
  const conteudoRef = useRef(null)
  const medidorRef = useRef(null)

  useLayoutEffect(() => {
    if (!conteudoRef.current || !medidorRef.current) return

    const medirConteudo = () => {
      const elementoMedidor = medidorRef.current
      const elementoConteudo = conteudoRef.current

      const alturaTotal = elementoMedidor.scrollHeight
      const lineHeight = parseFloat(getComputedStyle(elementoMedidor).lineHeight)
      const alturaLimitada = lineHeight * maxLinhas

      setAlturaCompleta(alturaTotal)
      setAltura(expandido ? alturaTotal : alturaLimitada)
      setPrecisaExpandir(alturaTotal > alturaLimitada)
    }

    medirConteudo()

    const resizeObserver = new ResizeObserver(medirConteudo)
    resizeObserver.observe(conteudoRef.current)

    return () => resizeObserver.disconnect()
  }, [texto, maxLinhas, expandido])

  const toggleExpandir = () => {
    setExpandido(!expandido)
  }

  return (
    <div className="descricao-expandivel">
      <div 
        ref={conteudoRef}
        className="descricao-expandivel__conteudo"
        style={{ 
          maxHeight: `${altura}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out'
        }}
      >
        <div ref={medidorRef} className="descricao-expandivel__texto">
          {texto}
        </div>
      </div>
      
      {precisaExpandir && (
        <button 
          className="descricao-expandivel__botao"
          onClick={toggleExpandir}
          aria-expanded={expandido}
          aria-label={expandido ? 'Recolher descrição' : 'Expandir descrição'}
        >
          {expandido ? (
            <>
              <span>Mostrar menos</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span>Mostrar mais</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </div>
  )
}
