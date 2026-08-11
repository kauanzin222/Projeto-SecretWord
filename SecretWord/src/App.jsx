import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// components
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'

function App() {
  const [count, setCount] = useState(0)
  
  const estagio = [
    { id: 1, nome: 'inicio' },
    { id: 2, nome: 'jogo' },
    { id: 3, nome: 'fim' }
  ]
  const [estagioJogo, setEstagioJogo] = useState(estagio[0].nome)

  const iniciarJogo = () => {
    setEstagioJogo(estagio[1].nome)
  }
  const finalizarJogo = () => {
    setEstagioJogo(estagio[2].nome)
  }

  return (
    <>
      {estagioJogo == 'inicio' && <TelaInicial jogar={iniciarJogo}></TelaInicial>}


      {estagioJogo == 'jogo' && <Jogo></Jogo>}
    </>
  )
}

export default App
