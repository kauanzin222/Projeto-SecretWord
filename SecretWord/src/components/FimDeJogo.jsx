import React from 'react'
import styles from './FimDeJogo.module.css'

const FimDeJogo = ({ tentarNovamente, pontuacao }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fim de Jogo!</h1>

      <div className={styles.pontuacaoBadge}>
        Sua pontuação final foi: <span className={styles.pontuacaoNumero}>{pontuacao}</span>
      </div>

      <button className={styles.btnTentar} onClick={tentarNovamente}>
        Tentar novamente
      </button>
    </div>
  )
}

export default FimDeJogo