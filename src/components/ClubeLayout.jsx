import { Outlet, NavLink, useParams } from 'react-router-dom'
import { useClube } from '../context/ClubeContext.jsx'
import './ClubeLayout.css'

export default function ClubeLayout() {
  const { id } = useParams()
  const { clubes } = useClube()
  
  const clube = clubes.find(c => c.id === id)

  if (!clube) {
    return <div>Clube não encontrado</div>
  }

  return (
    <div className="clube-layout">
      <nav className="clube-layout__nav">
        <NavLink 
          to={`/clube/${id}`} 
          className="clube-layout__nav-link"
          end
        >
          Detalhes
        </NavLink>
        <NavLink to={`/clube/${id}/sessoes`} className="clube-layout__nav-link">
          Sessões
        </NavLink>
      </nav>
      
      <main className="clube-layout__main">
        <Outlet />
      </main>
    </div>
  )
}
