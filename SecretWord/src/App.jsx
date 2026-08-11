import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// components
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'

// data
import { listaPalavras } from './data/palavras'

const estagio = [
  { id: 1, nome: 'inicio' },
  { id: 2, nome: 'jogo' },
  { id: 3, nome: 'fim' }
]

function App() {
  const teste = () => {   
    console.log(categoria)
    console.log(palavra)
  }

  const [palavrasJogo] = useState(listaPalavras)

  const [estagioJogo, setEstagioJogo] = useState(estagio[0].nome)

  const [palavra, setPalavra] = useState('')
  const [categoria, setCategoria] = useState('')
  const [letrasUsadas, setLetras] = useState([])

  const iniciarJogo = () => {
    const resultado = sorteiaJogo()
    setCategoria(resultado.categoria)
    setPalavra(resultado.palavra)
    setEstagioJogo(estagio[1].nome)
  }

  const finalizarJogo = () => {
    setEstagioJogo(estagio[2].nome)
  }

  // SORTEIOS
  const sorteiaJogo = () => {
    const categoriaSorteada = sorteiaItem(Object.keys(palavrasJogo))
    return {
      categoria: categoriaSorteada,
      palavra: sorteiaItem(palavrasJogo[categoriaSorteada])
    }
  }
  const sorteiaItem = (itens) => {
    return itens[Math.floor(Math.random() * itens.length)]
  }

  return (
    <>
      {estagioJogo == 'inicio' && <TelaInicial jogar={iniciarJogo}></TelaInicial>}

      {estagioJogo == 'jogo' && <Jogo palavra={palavra} categoria={categoria} letras={letras}></Jogo>}
    </>
  )
}

export default App
