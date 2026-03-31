export const initialState = {
  nome: '',
  erro: ''
}

export function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NOME':
      const novoNome = action.payload
      const erro = validarNome(novoNome)
      return {
        ...state,
        nome: novoNome,
        erro
      }
    case 'SET_ERRO':
      return {
        ...state,
        erro: action.payload
      }
    case 'LIMPAR_FORM':
      return initialState
    default:
      return state
  }
}

function validarNome(valor) {
  if (valor.trim() === '') {
    return 'O nome do clube é obrigatório'
  } else if (valor.trim().length < 3) {
    return 'O nome deve ter pelo menos 3 caracteres'
  } else {
    return ''
  }
}
