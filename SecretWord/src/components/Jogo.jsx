import React from 'react'
import { useState, useRef } from 'react'
import styles from './Jogo.module.css'

const Jogo = ({
    letras,
    categoria,
    tentativas,
    pontuacao,
    jogarLetra,
    letrasChute,
    letrasErradas
}) => {
    const [letraEscolhida, setLetraEscolhida] = useState('')
    const inputLetra = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        jogarLetra(letraEscolhida)
        setLetraEscolhida('')
        inputLetra.current.focus()
    }

    return (
        <div className='container'>
            <p>Pontuação: {pontuacao}</p>
            <h1>Adivinhe a Palavra</h1>
            <p>Dica sobre a palavra: <span className={styles.dica}>{categoria}</span></p>
            <p>Você ainda tem {tentativas} tentativa(s)</p>

            <div className={styles.containerPalavra}>
                {letras.map((letra, i) =>
                    <div className={styles.quadPalavra} value={letra} key={i}>
                        {letrasChute.includes(letra) ? letra : ''}
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
                    ref={inputLetra}
                    onChange={(e) => { setLetraEscolhida(e.target.value.toUpperCase()) }} />

                <button type='submit'>JOGAR!</button>
            </form>
            <p>Letras já utilizadas:</p>
            {letrasErradas.join(', ')}
        </div>
    )
}

export default Jogo
