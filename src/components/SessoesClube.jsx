import { useParams, Link } from 'react-router-dom'
import { useClube } from '../context/ClubeContext.jsx'
import { useState, useEffect } from 'react'
import { Calendar, Users, BookOpen, FileText } from 'lucide-react'
import './SessoesClube.css'

export default function SessoesClube() {
  const { id } = useParams()
  const { clubes } = useClube()
  const [clubeDetalhado, setClubeDetalhado] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const carregarClubeDetalhado = async () => {
      try {
        if (id === 'clb-001') {
          const response = await fetch('/src/utils/db/clube01.json')
          const data = await response.json()
          setClubeDetalhado(data)
        } else if (id === 'clb-002') {
          const response = await fetch('/src/utils/db/clube02.json')
          const data = await response.json()
          setClubeDetalhado(data)
        } else {
          const clube = clubes.find(c => c.id === id)
          setClubeDetalhado(clube)
        }
      } catch (error) {
        console.error('Erro ao carregar clube:', error)
        const clube = clubes.find(c => c.id === id)
        setClubeDetalhado(clube)
      } finally {
        setLoading(false)
      }
    }

    if (clubes.length > 0) {
      carregarClubeDetalhado()
    }
  }, [id, clubes])

  if (loading) {
    return (
      <div className="sessoes-clube">
        <h1 className="page-title">Carregando...</h1>
      </div>
    )
  }

  if (!clubeDetalhado) {
    return (
      <div className="sessoes-clube">
        <h1 className="page-title">Clube não encontrado</h1>
        <Link to="/" className="sessoes-clube__back-link">
          <ArrowLeft size={16} />
          Voltar para lista
        </Link>
      </div>
    )
  }

  const sessoes = clubeDetalhado.sessoes || []

  const formatarData = (dataString) => {
    const data = new Date(dataString)
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="sessoes-clube">
      <h1 className="page-title">Sessões de Leitura</h1>
      <h2 className="sessoes-clube__subtitle">{clubeDetalhado.nome}</h2>

      <div className="sessoes-clube__list">
        {sessoes.map(sessao => (
          <div key={sessao.id} className="sessoes-clube__card">
            <div className="sessoes-clube__card-header">
              <div className="sessoes-clube__date">
                <Calendar size={20} />
                {formatarData(sessao.data)}
              </div>
              <div className="sessoes-clube__participants">
                <Users size={16} />
                {sessao.participantes} participantes
              </div>
            </div>

            <div className="sessoes-clube__book">
              <BookOpen size={20} />
              <span>{sessao.livroDiscutido}</span>
            </div>

            <div className="sessoes-clube__topics">
              <h4>Tópicos Abordados:</h4>
              <div className="sessoes-clube__topics-list">
                {sessao.topicosAbordados.map((topico, index) => (
                  <span key={index} className="sessoes-clube__topic">
                    {topico}
                  </span>
                ))}
              </div>
            </div>

            <div className="sessoes-clube__ata">
              <FileText size={16} />
              <p>{sessao.ata}</p>
            </div>
          </div>
        ))}
      </div>

      {sessoes.length === 0 && (
        <div className="sessoes-clube__empty">
          <BookOpen size={48} />
          <p>Este clube ainda não possui sessões registradas.</p>
        </div>
      )}
    </div>
  )
}
