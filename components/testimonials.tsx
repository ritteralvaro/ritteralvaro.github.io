import styles from "./testimonials.module.css"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      company: "Empresa XYZ",
      text: "Trabalhamos com o Alvaro por mais de 2 anos e os resultados foram excepcionais. Sua abordagem estratégica e conhecimento técnico transformaram completamente nossa presença digital.",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      company: "Startup ABC",
      text: "A combinação de design, marketing e tecnologia que o Alvaro oferece é única. Conseguimos aumentar nossas conversões em 150% em apenas 3 meses de trabalho.",
    },
    {
      id: 3,
      name: "Carlos Mendes",
      company: "Indústria Tech",
      text: "Alvaro entende profundamente como criar soluções que realmente funcionam. Seu trabalho vai muito além da estética, focando em resultados mensuráveis para o negócio.",
    },
  ]

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <h2 className="section-title">DEPOIMENTOS</h2>

        <h3 className={styles.subtitle}>
          Pegamos suas melhores ideias e <span className="highlight">transformamos nos maiores resultados</span>.
        </h3>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <div className={styles.info}>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.company}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
