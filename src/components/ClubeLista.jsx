import { useState, useEffect } from 'react'

export default function ClubeLista() {
  const [clubes, setClubes] = useState([])

  useEffect(() => {
    fetch('/src/utils/db/clubes.json')
      .then(response => response.json())
      .then(data => setClubes(data))
      .catch(error => console.error('Erro ao carregar clubes:', error))
  }, [])

  return (
    <div>
      <h1>Clubes de Leitura</h1>
      <ul>
        {clubes.map(clube => (
          <li key={clube.id}>{clube.nome}</li>
        ))}
      </ul>
    </div>
  )
}
