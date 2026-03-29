import { NavLink } from 'react-router-dom'
import { BookOpen, Plus, X } from 'lucide-react'
import './Sidebar.css'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <h2 className="sidebar__title">Clubes de Leitura</h2>
        <button
          className="sidebar__close-btn"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <NavLink 
              to="/" 
              className="sidebar__link"
              onClick={onClose}
            >
              <BookOpen size={20} />
              <span>Lista de Clubes</span>
            </NavLink>
          </li>
          
          <li className="sidebar__item">
            <NavLink 
              to="/adicionar" 
              className="sidebar__link"
              onClick={onClose}
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
