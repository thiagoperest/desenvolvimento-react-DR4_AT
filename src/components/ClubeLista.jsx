import { useClube } from '../context/ClubeContext.jsx'
import { X } from 'lucide-react'
import './ClubeLista.css'

export default function ClubeLista() {
  const { clubes, removerClube } = useClube()

  const handleExcluir = (id, event) => {
    event.stopPropagation()
    removerClube(id)
  }

  return (
    <div className="clube-lista">
      <h1 className="page-title">Todos os Clubes</h1>
      <div className="clube-lista__content">
        <ul className="clube-lista__list">
          {clubes.map(clube => (
            <li key={clube.id} className="clube-lista__item">
              <span>{clube.nome}</span>
              <button 
                className="clube-lista__delete-btn"
                onClick={(e) => handleExcluir(clube.id, e)}
                title="Excluir clube"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
