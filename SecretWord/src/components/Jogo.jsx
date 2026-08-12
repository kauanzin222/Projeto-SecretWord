import React from 'react'
import { useState } from 'react'
import styles from './Jogo.module.css'

const Jogo = ({ palavra, categoria, tentativas, pontuacao, jogarLetra, letrasUsadas }) => {
    const [letraEscolhida, setLetraEscolhida] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        jogarLetra(letraEscolhida)
        setLetraEscolhida('')
    }

    return (
        <div className='container'>
            <p>Pontuação: {pontuacao}</p>
            <h1>Adivinhe a Palavra</h1>
            <p>Dica sobre a palavra: <span className={styles.dica}>{categoria}</span></p>
            <p>Você ainda tem {tentativas} tentativa(s)</p>

            <div className={styles.containerPalavra}>
                {palavra.split('').map((letra, index) =>
                    <div className={styles.quadPalavra} value={letra} key={index}>
                        {letrasUsadas.includes(letra.toUpperCase()) ? letra.toUpperCase() : ''}
                    </div>)}
            </div>

            <p>Tente adivinhar uma letra da palavra:</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.inputLetra}
                    maxLength={1}
                    value={letraEscolhida}
                    required
                    onChange={(e) => { setLetraEscolhida(e.target.value.toUpperCase()) }} />

                <button type='submit'>JOGAR!</button>
            </form>
            <p>Letras já utilizada:</p>
            {letrasUsadas.join(', ')}
        </div>
    )
}

export default Jogo
