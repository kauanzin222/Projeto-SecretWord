import React from 'react'
import styles from './TelaInicial.module.css'

const TelaInicial = ({ jogar }) => {
    return (
        <div className='container'>
            <h1>Secret Word</h1>
            <p className={styles.subtitle}>Clique no botão abaixo para começar a jogar</p>
            <button onClick={jogar}>Começar jogo</button>
        </div>
    )
}

export default TelaInicial
