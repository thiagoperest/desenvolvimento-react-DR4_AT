import { useParams, Link } from 'react-router-dom'
import { useClube } from '../context/ClubeContext.jsx'
import { ArrowLeft, Users, Calendar, Clock, MapPin, BookOpen, User } from 'lucide-react'
import DescricaoExpandivel from './DescricaoExpandivel.jsx'
import './DetalhesClube.css'

export default function DetalhesClube() {
  const { id } = useParams()
  const { clubes } = useClube()

  const clube = clubes.find(c => c.id === id)

  if (!clube) {
    return (
      <div className="detalhes-clube">
        <h1 className="page-title">Clube não encontrado</h1>
        <Link to="/" className="detalhes-clube__back-link">
          <ArrowLeft size={16} />
          Voltar para lista
        </Link>
      </div>
    )
  }

  return (
    <div className="detalhes-clube">
      <div className="detalhes-clube__card">
        <div className="detalhes-clube__header">
          <h1 className="detalhes-clube__title">{clube.nome}</h1>
          <span className={`detalhes-clube__status detalhes-clube__status--${clube.status.toLowerCase()}`}>
            {clube.status}
          </span>
        </div>

        <div className="detalhes-clube__info-grid">
          <div className="detalhes-clube__info-item">
            <BookOpen size={20} />
            <div>
              <p className="detalhes-clube__label">Categoria</p>
              <p className="detalhes-clube__value">{clube.categoria}</p>
            </div>
          </div>

          <div className="detalhes-clube__info-item">
            <Users size={20} />
            <div>
              <p className="detalhes-clube__label">Membros Ativos</p>
              <p className="detalhes-clube__value">{clube.membrosAtivos}</p>
            </div>
          </div>

          <div className="detalhes-clube__info-item">
            <Calendar size={20} />
            <div>
              <p className="detalhes-clube__label">Dias de Encontro</p>
              <p className="detalhes-clube__value">{clube.diasEncontro.join(', ')}</p>
            </div>
          </div>

          <div className="detalhes-clube__info-item">
            <Clock size={20} />
            <div>
              <p className="detalhes-clube__label">Horário</p>
              <p className="detalhes-clube__value">{clube.horario}</p>
            </div>
          </div>

          <div className="detalhes-clube__info-item">
            <MapPin size={20} />
            <div>
              <p className="detalhes-clube__label">Local</p>
              <p className="detalhes-clube__value">{clube.local}</p>
            </div>
          </div>

          <div className="detalhes-clube__info-item">
            <User size={20} />
            <div>
              <p className="detalhes-clube__label">Coordenador</p>
              <p className="detalhes-clube__value">{clube.coordenador}</p>
            </div>
          </div>
        </div>

        {clube.livroAtual && clube.livroAtual.titulo && (
          <div className="detalhes-clube__book-section">
            <h3 className="detalhes-clube__book-title">Livro Atual</h3>
            <div className="detalhes-clube__book-card">
              <BookOpen size={24} />
              <p>{clube.livroAtual.titulo}</p>
            </div>
          </div>
        )}

        {clube.descricao && (
          <div className="detalhes-clube__description">
            <h3>Descrição</h3>
            <DescricaoExpandivel texto={clube.descricao} maxLinhas={4} />
          </div>
        )}
      </div>
    </div>
  )
}
