import { useClube } from '../context/ClubeContext.jsx'
import NovoClube from './NovoClube.jsx'
import './ClubeLista.css'

export default function AdicionarClubePage() {
  const { adicionarClube } = useClube()

  return (
    <div className="clube-lista">
      <h1 className="clube-lista__title">Clubes de Leitura</h1>
      <div className="clube-lista__content">
        <NovoClube onAdicionarClube={adicionarClube} />
      </div>
    </div>
  )
}
