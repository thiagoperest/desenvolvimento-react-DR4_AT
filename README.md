# Clubes de Leitura - INFNET - DR4 AT

![React](https://img.shields.io/badge/React-19-61DAFB.svg?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245.svg?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Ativo-success.svg)

Aplicação web desenvolvida como projeto prático para gerenciamento de clubes de leitura, implementando uma SPA com navegação client-side, gerenciamento de estado com Context API e useReducer, e interface responsiva com CSS seguindo a metodologia BEM.

## Sobre o Projeto

Este projeto foi desenvolvido como parte do **DR4 - AT: Desenvolvimento React** do Instituto Infnet, implementando um sistema completo de clubes de leitura com roteamento SPA, gerenciamento de estado global, componentes reutilizáveis e design responsivo com suporte a dispositivos móveis.

**Instituto Infnet** - Projeto de Bloco  
**Disciplina:** Desenvolvimento React  
**Aluno:** Thiago Teodoro Peres

## Arquitetura

A aplicação implementa uma arquitetura de componentes com separação clara de responsabilidades, seguindo os princípios do React moderno:

```
Presentation Layer (Components JSX)
        ↓
State Layer (Context API + useReducer)
        ↓
Routing Layer (React Router DOM)
        ↓
Data Layer (JSON estático / fetch)
```

O estado global é gerenciado via **ClubeContext**, que expõe os dados e as actions (adicionar, remover, atualizar) para toda a árvore de componentes sem prop drilling.

### Decisões Arquiteturais

As decisões arquiteturais estão documentadas no formato [ADR](docs/adrs) (Architecture Decision Records).

## Funcionalidades Implementadas

- **Lista de Clubes** - Visualização de todos os clubes com navegação e exclusão com confirmação
- **Detalhes do Clube** - Informações completas: categoria, membros, horário, local, coordenador e livro atual
- **Sessões de Leitura** - Histórico de sessões com data, participantes, tópicos e ata
- **Adicionar Clube** - Formulário controlado com validação em tempo real via `formReducer`
- **Descrição Expansível** - Componente animado de expand/collapse com `ResizeObserver`
- **Modal de Confirmação** - Modal reutilizável para ações de exclusão
- **Sidebar Responsiva** - Navegação off-canvas com menu do tipo "hamburguer" no mobile
- **Navegação Ativa** - Indicação visual de rota ativa com `NavLink`
- **Rotas SPA** - Navegação client-side com rotas aninhadas via React Router DOM

## Como Executar

### Pré-requisitos

- Node.js 18 ou superior
- npm 9 ou superior

### Execução

1. **Clone e instale as dependências:**
   ```bash
   git clone https://github.com/thiagoperest/desenvolvimento-react-DR4_AT.git
   cd desenvolvimento-react-DR4_AT
   npm install
   ```

2. **Execute em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse a aplicação:**
   - App: http://localhost:5173

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build de produção
npm run lint     # Análise estática com ESLint
```

## Estrutura do Projeto

```
src/
├── assets/
├── components/
│   ├── AdicionarClubePage.jsx
│   ├── ClubeLayout.jsx
│   ├── ClubeLista.jsx
│   ├── DescricaoExpandivel.jsx
│   ├── DetalhesClube.jsx
│   ├── Layout.jsx
│   ├── ModalConfirmacao.jsx
│   ├── NovoClube.jsx
│   ├── SessoesClube.jsx
│   └── Sidebar.jsx
├── context/
│   └── ClubeContext.jsx
├── reducers/
│   ├── clubeReducer.js
│   └── formReducer.js
├── utils/
│   └── db/
│       ├── clubes.json
│       ├── clube01.json
│       └── clube02.json
├── App.jsx
├── App.css
├── index.css
└── main.jsx

docs/
└── adrs/
```

## Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `ClubeLista` | Lista de todos os clubes |
| `/adicionar` | `AdicionarClubePage` | Formulário para novo clube |
| `/clube/:id` | `DetalhesClube` | Informações detalhadas do clube |
| `/clube/:id/sessoes` | `SessoesClube` | Histórico de sessões do clube |

## Gerenciamento de Estado

O estado global é centralizado no `ClubeContext` e gerenciado pelo `clubeReducer` com as seguintes actions:

| Action | Descrição |
|---|---|
| `CARREGAR_CLUBES_SUCCESS` | Carrega dados dos JSONs na inicialização |
| `ADICIONAR_CLUBE` | Insere novo clube no estado |
| `REMOVER_CLUBE` | Remove clube por ID |
| `ATUALIZAR_CLUBE` | Atualiza dados de um clube existente |

## Decisões Arquiteturais (ADRs)

| ADR | Decisão |
|---|---|
| [001](docs/adrs/001-css-padrao-bem.md) | Adoção do padrão BEM para nomenclatura de classes CSS |
| [002](docs/adrs/002-icone-library-lucide-react.md) | Lucide React como biblioteca oficial de ícones |
| [003](docs/adrs/003-sidebar-navegacao-ativa.md) | Sidebar com `NavLink` para indicação de rota ativa |
| [004](docs/adrs/004-variaveis-cores-css.md) | Variáveis de cores CSS centralizadas no `:root` |

## Tecnologias Utilizadas

- **React 19** - Biblioteca principal para construção de interfaces
- **Vite 8** - Build tool e servidor de desenvolvimento
- **React Router DOM 7** - Roteamento client-side com rotas aninhadas
- **Lucide React** - Biblioteca de ícones SVG
- **CSS Puro (BEM)** - Estilização com metodologia BEM e variáveis CSS
- **Context API + useReducer** - Gerenciamento de estado global
- **ESLint** - Análise estática de código

## Contato

**Thiago Teodoro Peres**  
Email: thiago.peres@al.infnet.edu.br  
Instituto Infnet - Desenvolvimento React

---

**Projeto desenvolvido para o Instituto Infnet - DR4 AT**
