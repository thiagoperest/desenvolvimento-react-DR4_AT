import { useClube } from '../context/ClubeContext.jsx'
import NovoClube from './NovoClube.jsx'
import './ClubeLista.css'

export default function AdicionarClubePage() {
  const { adicionarClube } = useClube()

  return (
    <div className="adicionar-clube-page">
      <h1 className="page-title">Novo Clube</h1>
      <div className="adicionar-clube-page__container">
        <NovoClube onAdicionarClube={adicionarClube} />
      </div>
    </div>
  )
}
