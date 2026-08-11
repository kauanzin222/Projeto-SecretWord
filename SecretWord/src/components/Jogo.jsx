import React from 'react'
import styles from './Jogo.module.css'

const Jogo = ({ teste }) => {

    return (
        <div className='container'>
            <p>Pontuação: </p>
            <h1>Adivinhe a Palavra</h1>
            <p>Dica sobre a palavra: </p>
            <p>Você ainda tem { } tentativa(s)</p>

            <div className={styles.containerPalavra}>
                <div className={styles.quadPalavra}></div>
                <div className={styles.quadPalavra}></div>
                <div className={styles.quadPalavra}></div>
                <div className={styles.quadPalavra}></div>
                <div className={styles.quadPalavra}></div>
                <div className={styles.quadPalavra}></div>
            </div>

            <p>Tente adivinhar uma letra da palavra:</p>

            <form><input type="text" className={styles.inputLetra} maxLength={1} /> <button onClick={teste()}>JOGAR!</button></form>
            <p>Letras já utilizada:</p>

        </div>
    )
}

export default Jogo
