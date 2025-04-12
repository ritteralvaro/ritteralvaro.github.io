import { Palette, LineChart, Lightbulb, Camera, Layers } from "lucide-react"
import styles from "./services.module.css"

export default function Services() {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "Design UX/UI",
      description:
        "Criação de interfaces intuitivas e atraentes que proporcionam a melhor experiência para os usuários, aumentando conversões e engajamento.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Growth Marketing",
      description:
        "Estratégias de crescimento focadas em resultados mensuráveis, otimizando processos e aumentando a performance dos seus canais digitais.",
    },
    {
      icon: <Layers size={32} />,
      title: "Branding",
      description:
        "Desenvolvimento de identidades visuais que comunicam a essência da sua marca e criam conexões emocionais com seu público-alvo.",
    },
    {
      icon: <Camera size={32} />,
      title: "Audiovisual & Fotografia",
      description:
        "Produção de conteúdo visual de alta qualidade que conta a história da sua marca e destaca seus produtos ou serviços.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Consultoria Criativa",
      description:
        "Orientação estratégica para alinhar seus objetivos de negócio com soluções criativas que geram resultados concretos.",
    },
  ]

  return (
    <section id="servicos" className={`section ${styles.services}`}>
      <div className="container">
        <h2 className="section-title">SERVIÇOS</h2>

        <div className={`${styles.intro} animate-in`}>
          <h3 className={styles.introTitle}>
            Transformando <span className="highlight">ideias em resultados</span> com soluções criativas e estratégicas
          </h3>
          <p className={styles.introText}>
            Ofereço um conjunto completo de serviços para ajudar sua marca a se destacar no mercado digital e físico,
            sempre com foco em performance e resultados mensuráveis.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.service} hover-glow animate-in animate-in-delay-${index + 1}`}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
