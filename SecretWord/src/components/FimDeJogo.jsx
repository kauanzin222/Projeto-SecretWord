import React from 'react'

const FimDeJogo = ({
  tentarNovamente,
  pontuacao
}) => {
  return (
    <div className='container'>
      <h1>Fim de Jogo!</h1>
      <p>Sua pontuação final foi: <span>{pontuacao}</span></p>
      <button onClick={tentarNovamente}>Tentar novamente</button>
    </div>
  )
}

export default FimDeJogo
