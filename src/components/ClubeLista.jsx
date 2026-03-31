import { useState } from 'react'
import { useClube } from '../context/ClubeContext.jsx'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import ModalConfirmacao from './ModalConfirmacao.jsx'
import './ClubeLista.css'

export default function ClubeLista() {
  const { clubes, removerClube } = useClube()
  const [modalAberto, setModalAberto] = useState(false)
  const [clubeParaExcluir, setClubeParaExcluir] = useState(null)

  const handleAbrirModal = (id, nome) => (event) => {
    event.stopPropagation()
    setClubeParaExcluir({ id, nome })
    setModalAberto(true)
  }

  const handleFecharModal = () => {
    setModalAberto(false)
    setClubeParaExcluir(null)
  }

  const handleConfirmarExclusao = () => {
    if (clubeParaExcluir) {
      removerClube(clubeParaExcluir.id)
    }
  }

  return (
    <div className="clube-lista">
      <h1 className="page-title">Todos os Clubes</h1>
      <div className="clube-lista__content">
        <ul className="clube-lista__list">
          {clubes.map(clube => (
            <li key={clube.id} className="clube-lista__item">
              <Link to={`/clube/${clube.id}`} className="clube-lista__link">
                {clube.nome}
              </Link>
              <button 
                className="clube-lista__delete-btn"
                onClick={handleAbrirModal(clube.id, clube.nome)}
                title="Excluir clube"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ModalConfirmacao
        isOpen={modalAberto}
        onClose={handleFecharModal}
        onConfirm={handleConfirmarExclusao}
        titulo="Excluir Clube"
        mensagem={clubeParaExcluir ? `Tem certeza que deseja excluir o clube "${clubeParaExcluir.nome}"?` : ''}
        textoBotaoConfirmar="Excluir"
        textoBotaoCancelar="Cancelar"
      />
    </div>
  )
}
