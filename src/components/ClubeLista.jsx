import { useState, useEffect } from 'react'
import NovoClube from './NovoClube.jsx'
import './ClubeLista.css'

export default function ClubeLista() {
  const [clubes, setClubes] = useState([])

  useEffect(() => {
    fetch('/src/utils/db/clubes.json')
      .then(response => response.json())
      .then(data => setClubes(data))
      .catch(error => console.error('Erro ao carregar clubes:', error))
  }, [])

  const adicionarClube = (novoClube) => {
    const clubeComId = {
      ...novoClube,
      id: `clb-${String(clubes.length + 1).padStart(3, '0')}`
    }
    setClubes([clubeComId, ...clubes])
  }

  return (
    <div className="clube-lista">
      <h1 className="clube-lista__title">Clubes de Leitura</h1>
      <div className="clube-lista__content">
        <NovoClube onAdicionarClube={adicionarClube} />
        <ul className="clube-lista__list">
          {clubes.map(clube => (
            <li key={clube.id} className="clube-lista__item">{clube.nome}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
