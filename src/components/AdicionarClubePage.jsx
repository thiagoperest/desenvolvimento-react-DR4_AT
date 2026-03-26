import { useClube } from '../context/ClubeContext.jsx'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import NovoClube from './NovoClube.jsx'
import './ClubeLista.css'

export default function AdicionarClubePage() {
  const { adicionarClube } = useClube()

  return (
    <div className="adicionar-clube-page">
      <div className="adicionar-clube-page__container">
        <div className="adicionar-clube-page__header">
          <Link to="/" className="adicionar-clube-page__back-link">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <h1 className="adicionar-clube-page__title">Novo Clube</h1>
        </div>
        <NovoClube onAdicionarClube={adicionarClube} />
      </div>
    </div>
  )
}
