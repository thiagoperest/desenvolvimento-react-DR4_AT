import { useState } from 'react'

export default function NovoClube({ onAdicionarClube }) {
  const [nome, setNome] = useState('')
  const [erro, setErro] = useState('')

  const validarNome = (valor) => {
    if (valor.trim() === '') {
      setErro('O nome do clube é obrigatório')
      return false
    } else if (valor.trim().length < 3) {
      setErro('O nome deve ter pelo menos 3 caracteres')
      return false
    } else {
      setErro('')
      return true
    }
  }

  const handleChange = (e) => {
    const valor = e.target.value
    setNome(valor)
    validarNome(valor)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validarNome(nome)) {
      onAdicionarClube({ nome: nome.trim() })
      setNome('')
      setErro('')
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
