import { useReducer } from 'react'
import { formReducer, initialState } from '../reducers/formReducer.js'

export default function NovoClube({ onAdicionarClube }) {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { nome, erro } = state

  const handleChange = (e) => {
    dispatch({ type: 'SET_NOME', payload: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!erro && nome.trim()) {
      onAdicionarClube({ nome: nome.trim() })
      dispatch({ type: 'LIMPAR_FORM' })
    }
  }

  const isFormValid = nome.trim().length >= 3 && erro === ''

  return (
    <form onSubmit={handleSubmit} className="novo-clube__form">
      <label className="novo-clube__label">
        Nome do Clube:
        <input 
          type="text"
          className={`novo-clube__input ${erro ? 'novo-clube__input--erro' : ''}`}
          value={nome}
          onChange={handleChange}
          placeholder="Digite o nome do clube"
        />
        {erro && <span className="novo-clube__erro">{erro}</span>}
      </label>
      <button 
        type="submit" 
        className="novo-clube__button"
        disabled={!isFormValid}
      >
        Adicionar
      </button>
    </form>
  )
}
