import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// components
import TelaInicial from './components/TelaInicial'

function App() {
  const [count, setCount] = useState(0)
  const [jogar, setJogar] = useState(0)

  const handleIniciarJogo = () => {
    setJogar(1)
  }

  return (
    <>
      {!jogar && <TelaInicial jogar={handleIniciarJogo}></TelaInicial>}
    </>
  )
}

export default App
