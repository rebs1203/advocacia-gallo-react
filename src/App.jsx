import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components /Footer'
import HomeCom from './components /HomeCom'
import NavBar from './components /NavBar'
import AdvogadoOnCom from './components /AdvogadoOnCom'
import AreasCom from './components /AreasCom'
import ContatoCom from './components /ContatoCom'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeCom />} />
        <Route path='/advogado' element={<AdvogadoOnCom />} />
        <Route path='/areas' element={<AreasCom />} />
        <Route path='/contato' element={<ContatoCom />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
