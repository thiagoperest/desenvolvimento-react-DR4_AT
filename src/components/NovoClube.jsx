import { useState } from 'react'

export default function NovoClube({ onAdicionarClube }) {
  const [nome, setNome] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nome.trim()) {
      onAdicionarClube({ nome: nome.trim() })
      setNome('')
    }
  }

  return (
    <div className="novo-clube">
      <h2 className="novo-clube__title">Adicionar Novo Clube</h2>
      <form onSubmit={handleSubmit}>
        <label className="novo-clube__label">
          Nome do Clube:
          <input 
            type="text"
            className="novo-clube__input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do clube"
          />
        </label>
        <button type="submit" className="novo-clube__button">Adicionar</button>
      </form>
    </div>
  )
}
