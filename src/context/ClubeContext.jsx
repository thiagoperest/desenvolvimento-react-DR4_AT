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
    const carregarClubes = async () => {
      try {
        const [clubesResponse, clube01Response, clube02Response] = await Promise.all([
          fetch('/src/utils/db/clubes.json'),
          fetch('/src/utils/db/clube01.json'),
          fetch('/src/utils/db/clube02.json')
        ])

        const clubesData = await clubesResponse.json()
        const clube01Data = await clube01Response.json()
        const clube02Data = await clube02Response.json()

        const clubesDetalhados = { 
          [clube01Data.id]: clube01Data, 
          [clube02Data.id]: clube02Data 
        }

        const clubesMesclados = clubesData.map(clube => {
          const detalhes = clubesDetalhados[clube.id]
          return detalhes ? { ...clube, ...detalhes } : clube
        })

        dispatch({ type: 'CARREGAR_CLUBES_SUCCESS', payload: clubesMesclados })
      } catch (error) {
        dispatch({ type: 'CARREGAR_CLUBES_ERROR', payload: error.message })
      }
    }

    carregarClubes()
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
