import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero">
      <div className="backgroundGradient"></div>
      <div className="backgroundGrid"></div>

      <div className="container">
        <div className="content">
          <h1 className="title animate-in">
            Designer com ampla experiência em <span className="highlight">soluções personalizadas</span>
          </h1>
          <p className="subtitle animate-in animate-in-delay-1">
            Atuo em UX/UI, Growth Marketing e Design Gráfico, e lídero times e projetos que transformam ideias em
            resultados concretos. Meu objetivo é ajudar marcas a se destacarem, com abordagens criativas que otimizam
            processos e impulsionam vendas.
          </p>
          <div className="cta animate-in animate-in-delay-2">
            <Link href="/#projetos" className="btn btn-primary">
              Ver projetos <ArrowRight size={18} />
            </Link>
            <Link href="/#sobre" className="btn btn-outline">
              Sobre mim
            </Link>
          </div>
        </div>
        <div className="imageWrapper animate-in animate-in-delay-3">
          <div className="imageContainer">
            <div className="imageBorder"></div>
            <Image
              src="/alvaro.png"
              alt="Alvaro Ritter"
              width={600}
              height={800}
              className="image"
              priority
            />
            <div className="stats">
              <div className="stat stat1 animate-in animate-in-delay-4">
                <span className="statValue">UX/UI</span>
                <span className="statLabel">Design de interfaces</span>
              </div>
              <div className="stat stat2 animate-in animate-in-delay-5">
                <span className="statValue">Growth</span>
                <span className="statLabel">Marketing estratégico</span>
              </div>
              <div className="stat stat3 animate-in animate-in-delay-6">
                <span className="statValue">Branding</span>
                <span className="statLabel">Identidade visual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
