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

    const handleOnChange = (e) => {
        setLetraEscolhida(e.target.value.toUpperCase().slice(0, 1))
    }

    return (
        <div className={styles.container}>
            <div className={styles.pontuacaoBadge}>
                Pontuação: {pontuacao}
            </div>

            <h1 className={styles.title}>Adivinhe a Palavra</h1>

            <p>Dica sobre a palavra: <span className={styles.dica}>{categoria}</span></p>
            <p className={styles.tentativas}>Você ainda tem {tentativas} tentativa(s)</p>

            <div className={styles.containerPalavra}>
                {letras.map((letra, i) =>
                    <div className={styles.quadPalavra} key={i}>
                        {letrasChute.includes(letra) ? letra : ''}
                    </div>)}
            </div>

            <p>Tente adivinhar uma letra da palavra:</p>

            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <input
                    type="text"
                    className={styles.inputLetra}
                    maxLength={1}
                    value={letraEscolhida}
                    required
                    ref={inputLetra}
                    onChange={handleOnChange} />

                <button type='submit' className={styles.btnJogar}>JOGAR!</button>
            </form>

            <div className={styles.letrasUsadasContainer}>
                <p>Letras já utilizadas:</p>
                <span className={styles.letrasUsadas}>{letrasErradas.join(', ')}</span>
            </div>
        </div>
    )
}

export default Jogo