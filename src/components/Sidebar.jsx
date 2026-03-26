import { NavLink } from 'react-router-dom'
import { BookOpen, Plus } from 'lucide-react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__title">Clubes de Leitura</h2>
      </div>
      
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <NavLink 
              to="/" 
              className="sidebar__link"
            >
              <BookOpen size={20} />
              <span>Lista de Clubes</span>
            </NavLink>
          </li>
          
          <li className="sidebar__item">
            <NavLink 
              to="/adicionar" 
              className="sidebar__link"
            >
              <Plus size={20} />
              <span>Adicionar Clube</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
