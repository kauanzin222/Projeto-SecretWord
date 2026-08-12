import React from 'react'
import styles from './Jogo.module.css'

const Jogo = ({ palavra, categoria, tentativas, pontuacao }) => {

    return (
        <div className='container'>
            <p>Pontuação: {pontuacao}</p>
            <h1>Adivinhe a Palavra</h1>
            <p>Dica sobre a palavra: <span className={styles.dica}>{categoria}</span></p>
            <p>Você ainda tem {tentativas} tentativa(s)</p>

            <div className={styles.containerPalavra}>
                {palavra.split('').map((letra, index) =>
                    <div className={styles.quadPalavra} value={letra} key={index}></div>)}
            </div>

            <p>Tente adivinhar uma letra da palavra:</p>

            <form><input type="text" className={styles.inputLetra} maxLength={1} /> <button>JOGAR!</button></form>
            <p>Letras já utilizada:</p>

        </div>
    )
}

export default Jogo
