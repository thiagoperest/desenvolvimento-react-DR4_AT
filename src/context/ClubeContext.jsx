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
      id: `clb-${String(clubes.length + 1).padStart(3, '0')}`,
      categoria: 'Geral',
      status: 'Ativo',
      membrosAtivos: 0,
      diasEncontro: ['A definir'],
      horario: 'A definir',
      local: 'A definir',
      livroAtual: { titulo: 'A definir' },
      coordenador: 'A definir',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a eros augue. Pellentesque malesuada odio eu mi bibendum maximus. Vestibulum faucibus eros quis nulla luctus elementum. Sed at ullamcorper felis.'
    }
    setClubes([clubeComId, ...clubes])
  }

  const removerClube = (id) => {
    setClubes(clubes.filter(clube => clube.id !== id))
  }

  return (
    <ClubeContext.Provider value={{ clubes, adicionarClube, removerClube }}>
      {children}
    </ClubeContext.Provider>
  )
}
