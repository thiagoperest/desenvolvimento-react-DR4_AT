import { createContext, useContext, useState, useEffect } from 'react'

const ClubeContext = createContext()

export function useClube() {
  return useContext(ClubeContext)
}

export function ClubeProvider({ children }) {
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
    <ClubeContext.Provider value={{ clubes, adicionarClube }}>
      {children}
    </ClubeContext.Provider>
  )
}
