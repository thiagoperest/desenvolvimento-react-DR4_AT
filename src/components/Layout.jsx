import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import './Layout.css'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="layout">
      <div className="layout__topbar">
        <button
          className="layout__hamburger"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
        <span className="layout__topbar-title">Clubes de Leitura</span>
      </div>

      {sidebarOpen && (
        <div
          className="layout__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="layout__main">
        <div className="layout__content">
          {children}
        </div>
      </main>
    </div>
  )
}
