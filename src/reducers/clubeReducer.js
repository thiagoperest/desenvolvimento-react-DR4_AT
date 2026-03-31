export const clubeInitialState = {
  clubes: [],
  loading: true,
  error: null
}

export function clubeReducer(state, action) {
  switch (action.type) {
    case 'CARREGAR_CLUBES_SUCCESS':
      return {
        ...state,
        clubes: action.payload,
        loading: false,
        error: null
      }
    case 'CARREGAR_CLUBES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'ADICIONAR_CLUBE':
      return {
        ...state,
        clubes: [action.payload, ...state.clubes]
      }
    case 'REMOVER_CLUBE':
      return {
        ...state,
        clubes: state.clubes.filter(clube => clube.id !== action.payload)
      }
    case 'ATUALIZAR_CLUBE':
      return {
        ...state,
        clubes: state.clubes.map(clube => 
          clube.id === action.payload.id 
            ? { ...clube, ...action.payload.dados }
            : clube
        )
      }
    default:
      return state
  }
}
