import Image from "next/image"

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="text-gradient">Cluster</span> Vagas
          </h1>
          <div className="hero-subtitle">
            <p>
              O <span className="highlight">impacto</span> que a sua <span className="highlight-blue">carreira</span>{" "}
              precisa.
            </p>
            <p>
              O <span className="highlight">espaço</span> que o seu talento{" "}
              <span className="highlight-blue">busca</span>.
            </p>
            <p>
              A <span className="highlight">experiência</span> que o seu futuro{" "}
              <span className="highlight-blue">pede</span>.
            </p>
          </div>
          <a href="#vagas" className="cta-button large">
            Ver vagas abertas
          </a>
        </div>
        <div className="hero-visual">
          <div className="shape-circle"></div>
          <div className="shape-lines"></div>
          <div className="photo-grid">
            <div className="photo photo-1">
              <Image src="/placeholder.svg?height=300&width=300" alt="Membro da equipe" width={300} height={300} />
            </div>
            <div className="photo photo-2">
              <Image src="/placeholder.svg?height=300&width=300" alt="Membro da equipe" width={300} height={300} />
            </div>
            <div className="photo photo-3">
              <Image src="/placeholder.svg?height=300&width=300" alt="Membro da equipe" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
