import {createContext, useContext, useEffect, useReducer} from 'react'
import { clubeReducer, clubeInitialState } from '../reducers/clubeReducer.js'

const ClubeContext = createContext()

export function useClube() {
  return useContext(ClubeContext)
}

export function ClubeProvider({ children }) {
  const [state, dispatch] = useReducer(clubeReducer, clubeInitialState)
  const { clubes, loading, error } = state

  useEffect(() => {
    fetch('/src/utils/db/clubes.json')
      .then(response => response.json())
      .then(data => dispatch({ type: 'CARREGAR_CLUBES_SUCCESS', payload: data }))
      .catch(error => dispatch({ type: 'CARREGAR_CLUBES_ERROR', payload: error.message }))
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
    dispatch({ type: 'ADICIONAR_CLUBE', payload: clubeComId })
  }

  const removerClube = (id) => {
    dispatch({ type: 'REMOVER_CLUBE', payload: id })
  }

  const atualizarClube = (id, dados) => {
    dispatch({ type: 'ATUALIZAR_CLUBE', payload: { id, dados } })
  }

  return (
    <ClubeContext.Provider value={{ clubes, loading, error, adicionarClube, removerClube, atualizarClube }}>
      {children}
    </ClubeContext.Provider>
  )
}
