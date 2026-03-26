import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClubeProvider } from './context/ClubeContext.jsx'
import Layout from './components/Layout.jsx'
import ClubeLista from './components/ClubeLista.jsx'
import AdicionarClubePage from './components/AdicionarClubePage.jsx'
import DetalhesClube from './components/DetalhesClube.jsx'
import './App.css'

function App() {
  return (
    <ClubeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ClubeLista />} />
            <Route path="/adicionar" element={<AdicionarClubePage />} />
            <Route path="/clube/:id" element={<DetalhesClube />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ClubeProvider>
  )
}

export default App
