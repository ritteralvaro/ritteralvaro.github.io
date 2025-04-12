import styles from "./ticker.module.css"

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.tickerTrack}>
        <div className={styles.tickerItem}>
          ★ ENCARE RESULTADOS SÓLIDOS E DEIXE A GESTÃO DE PERFORMANCE COM QUEM DOMINA NÚMEROS E EXECUÇÃO.
        </div>
        <div className={styles.tickerItem}>
          ★ ENCARE RESULTADOS SÓLIDOS E DEIXE A GESTÃO DE PERFORMANCE COM QUEM DOMINA NÚMEROS E EXECUÇÃO.
        </div>
        <div className={styles.tickerItem}>
          ★ ENCARE RESULTADOS SÓLIDOS E DEIXE A GESTÃO DE PERFORMANCE COM QUEM DOMINA NÚMEROS E EXECUÇÃO.
        </div>
      </div>
    </div>
  )
}
