import React from 'react'
import styles from './Jogo.module.css'

const Jogo = () => {

    return (
        <div className='container'>
            <p>Pontuacao</p>
            <h1>Adivinhe a Palavra:</h1>
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

            <select className={styles.selectLetra}></select> <button>JOGAR!</button>
            <p>Letras já utilizada:</p>

        </div>
    )
}

export default Jogo
