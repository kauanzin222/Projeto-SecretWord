import React from 'react'
import styles from './FimDeJogo.module.css'

const FimDeJogo = ({
  tentarNovamente,
  pontuacao,
  palavra
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fim de Jogo!</h1>

      <div className={styles.pontuacaoBadge}>
        Sua pontuação final foi: <span className={styles.pontuacaoNumero}>{pontuacao}</span>
      </div>

      <p className={styles.textoPalavra}>
        A palavra era: <span className={styles.palavraRevelada}>{palavra}</span>
      </p>

      <button className={styles.btnTentar} onClick={tentarNovamente}>
        Tentar novamente
      </button>
    </div>
  )
}

export default FimDeJogo