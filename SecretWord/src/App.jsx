import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// COMPONENTS
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'

// DATA
import { listaPalavras } from './data/palavras'
import FimDeJogo from './components/FimDeJogo'

const estagio = [
  { id: 1, nome: 'inicio' },
  { id: 2, nome: 'jogo' },
  { id: 3, nome: 'fim' }
]

const qntdTentativas = 3

function App() {
  // STATES
  const [estagioJogo, setEstagioJogo] = useState(estagio[0].nome)

  const [palavrasJogo] = useState(listaPalavras)
  const [palavra, setPalavra] = useState('')
  const [categoria, setCategoria] = useState('')
  const [letras, setLetras] = useState([])

  const [letrasChute, setLetrasChute] = useState([])
  const [letrasErradas, setLetrasErradas] = useState([])

  const [tentativas, setTentativas] = useState(qntdTentativas)
  const [pontuacao, setPontuacao] = useState(0)

  const teste = () => {
    console.log(categoria)
    console.log(palavra)
  }

  // ESTÁGIOS DO JOGO
  const limparStatesLetras = () => {
    setLetrasChute([])
    setLetrasErradas([])
  }

  const iniciarJogo = useCallback(() => {
    limparStatesLetras()

    const resultado = sorteiaJogo()
    setCategoria(resultado.categoria)
    setPalavra(resultado.palavra)
    setLetras(resultado.palavra.split('').map((letra) => letra.toUpperCase()))
    setTentativas(qntdTentativas)
    setEstagioJogo(estagio[1].nome)
  }, [palavra, categoria])

  const finalizarJogo = () => {
    setEstagioJogo(estagio[2].nome)
  }

  // SORTEIOS
  const sorteiaJogo = useCallback(() => {
    const categoriaSorteada = sorteiaItem(Object.keys(palavrasJogo))
    return {
      categoria: categoriaSorteada,
      palavra: sorteiaItem(palavrasJogo[categoriaSorteada])
    }
  }, [palavrasJogo])
  const sorteiaItem = (itens) => {
    return itens[Math.floor(Math.random() * itens.length)]
  }

  // TESTA TENTATIVA DO USUÁRIO
  const jogarLetra = (letra) => {
    // Checa se a letra já foi utilizada
    if (letrasChute.includes(letra) || letrasErradas.includes(letra)) {
      return
    }

    // Checa se a letra está correta
    if (letras.includes(letra)) {
      setLetrasChute((atualLetrasChute) => [...atualLetrasChute, letra])
    } else {
      setLetrasErradas((atualLetrasErradas) => [...atualLetrasErradas, letra])
      setTentativas((atualTentativas) => atualTentativas - 1)
    }
  }


  // Finaliza o jogo ao chegar em 0 tentativas
  useEffect(() => {
    if (tentativas <= 0) {
      limparStatesLetras()

      finalizarJogo()
    } 
    
  }, [tentativas])

  // Checa se o usuário acertou todas as letras
  useEffect(() => {
    const letrasUnicas = [...new Set(letras)]

    if (estagioJogo === 'jogo' && letrasChute.length === letrasUnicas.length) {
      setPontuacao((atualPontuacao) => (atualPontuacao + 100))
      iniciarJogo()
    }
  }, [letrasChute, iniciarJogo, letras])

  const tentarNovamente = () => {
    setTentativas(qntdTentativas)
    setPontuacao(0)
    iniciarJogo()
  }

  return (
    <>
      {estagioJogo == 'inicio' &&
        <TelaInicial
          jogar={iniciarJogo}>
        </TelaInicial>}

      {estagioJogo == 'jogo' &&
        <Jogo
          letras={letras}
          categoria={categoria}
          tentativas={tentativas}
          pontuacao={pontuacao}
          jogarLetra={jogarLetra}
          letrasChute={letrasChute}
          letrasErradas={letrasErradas}
        ></Jogo>}

      {estagioJogo == 'fim' &&
        <FimDeJogo
          tentarNovamente={tentarNovamente}
          pontuacao={pontuacao}>
        </FimDeJogo>}
    </>
  )
}

export default App
