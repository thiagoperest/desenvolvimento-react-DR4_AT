import { X } from 'lucide-react'
import './ModalConfirmacao.css'

export default function ModalConfirmacao({ 
  isOpen, 
  onClose, 
  onConfirm, 
  titulo = 'Confirmar ação',
  mensagem = 'Tem certeza que deseja continuar?',
  textoBotaoConfirmar = 'Confirmar',
  textoBotaoCancelar = 'Cancelar'
}) {
  if (!isOpen) return null

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-confirmacao" onClick={handleBackdropClick}>
      <div className="modal-confirmacao__dialog">
        <div className="modal-confirmacao__header">
          <h2 className="modal-confirmacao__titulo">{titulo}</h2>
          <button 
            className="modal-confirmacao__close-btn"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-confirmacao__body">
          <p className="modal-confirmacao__mensagem">{mensagem}</p>
        </div>

        <div className="modal-confirmacao__footer">
          <button 
            className="modal-confirmacao__btn modal-confirmacao__btn--cancelar"
            onClick={onClose}
          >
            {textoBotaoCancelar}
          </button>
          <button 
            className="modal-confirmacao__btn modal-confirmacao__btn--confirmar"
            onClick={handleConfirm}
          >
            {textoBotaoConfirmar}
          </button>
        </div>
      </div>
    </div>
  )
}
