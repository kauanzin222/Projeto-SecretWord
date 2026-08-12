import React from 'react'
import styles from './TelaInicial.module.css'

const TelaInicial = ({ jogar }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PALAVRA SECRETA</h1>
            <p className={styles.subtitle}>Clique no botão abaixo para começar a jogar</p>
            <button className={styles.btnStart} onClick={jogar}>Começar jogo</button>
        </div>
    )
}

export default TelaInicial
