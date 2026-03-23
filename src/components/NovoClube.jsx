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
    <div className="novo-clube-form">
      <h2>Adicionar Novo Clube</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Clube:
          <input 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do clube"
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
}
