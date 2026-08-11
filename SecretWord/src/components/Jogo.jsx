import React from 'react'
import styles from './Jogo.module.css'

const Jogo = ({ palavra, categoria, letras }) => {

    return (
        <div className='container'>
            <p>Pontuação: </p>
            <h1>Adivinhe a Palavra</h1>
            <p>Dica sobre a palavra: <span className={styles.dica}>{categoria}</span></p>
            <p>Você ainda tem { } tentativa(s)</p>

            <div className={styles.containerPalavra}>
                {letras.map((letra) =>
                    <div className={styles.quadPalavra} value={letra}></div>)}
            </div>

            <p>Tente adivinhar uma letra da palavra:</p>

            <form><input type="text" className={styles.inputLetra} maxLength={1} /> <button>JOGAR!</button></form>
            <p>Letras já utilizada:</p>

        </div>
    )
}

export default Jogo
