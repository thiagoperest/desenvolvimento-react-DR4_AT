import { useState } from 'react'

export default function NovoClube() {
  const [nome, setNome] = useState('')

  return (
    <div>
      <h2>Adicionar Novo Clube</h2>
      <form>
        <label>
          Nome do Clube:
          <input 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do clube"
          />
        </label>
      </form>
    </div>
  )
}
