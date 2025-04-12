import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.backgroundGrid}></div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-in`}>
            Designer com ampla experiência em <span className={styles.highlight}>soluções personalizadas</span>
          </h1>
          <p className={`${styles.subtitle} animate-in animate-in-delay-1`}>
            Atuo em UX/UI, Growth Marketing e Design Gráfico, e lídero times e projetos que transformam ideias em
            resultados concretos. Meu objetivo é ajudar marcas a se destacarem, com abordagens criativas que otimizam
            processos e impulsionam vendas.
          </p>
          <div className={`${styles.cta} animate-in animate-in-delay-2`}>
            <Link href="/#projetos" className="btn btn-primary">
              Ver projetos <ArrowRight size={18} />
            </Link>
            <Link href="/#sobre" className="btn btn-outline">
              Sobre mim
            </Link>
          </div>
        </div>
        <div className={`${styles.imageWrapper} animate-in animate-in-delay-3`}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}></div>
            <Image
              src="/alvaro.jpg"
              alt="Alvaro Ritter"
              width={600}
              height={800}
              className={styles.image}
              priority
            />
            <div className={styles.stats}>
              <div className={`${styles.stat} ${styles.stat1} animate-in animate-in-delay-4`}>
                <span className={styles.statValue}>UX/UI</span>
                <span className={styles.statLabel}>Design de interfaces</span>
              </div>
              <div className={`${styles.stat} ${styles.stat2} animate-in animate-in-delay-5`}>
                <span className={styles.statValue}>Growth</span>
                <span className={styles.statLabel}>Marketing estratégico</span>
              </div>
              <div className={`${styles.stat} ${styles.stat3} animate-in animate-in-delay-6`}>
                <span className={styles.statValue}>Branding</span>
                <span className={styles.statLabel}>Identidade visual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
