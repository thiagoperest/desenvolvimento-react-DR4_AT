import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClubeProvider } from './context/ClubeContext.jsx'
import ClubeLista from './components/ClubeLista.jsx'
import AdicionarClubePage from './components/AdicionarClubePage.jsx'
import './App.css'

function App() {
  return (
    <ClubeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClubeLista />} />
          <Route path="/adicionar" element={<AdicionarClubePage />} />
        </Routes>
      </BrowserRouter>
    </ClubeProvider>
  )
}

export default App
