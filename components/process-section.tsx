import Image from "next/image"

export default function ProcessSection() {
  return (
    <section className="section" id="processo">
      <div className="section-header">
        <h2>Nosso processo</h2>
        <div className="section-line"></div>
      </div>
      <div className="process-container">
        <div className="process-image">
          <Image src="/placeholder.svg?height=400&width=500" alt="Processo seletivo" width={500} height={400} />
        </div>
        <div className="process-content">
          <p className="process-text">
            Na Cluster, acreditamos que o processo seletivo deve ser transparente e eficiente. Nosso objetivo é conhecer
            você além do currículo, entendendo suas motivações, habilidades e como podemos crescer juntos.
          </p>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-marker"></div>
              <div className="process-step-content">
                <h4>Análise de currículo</h4>
                <p>Avaliamos sua experiência e habilidades técnicas</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-marker"></div>
              <div className="process-step-content">
                <h4>Entrevista com RH</h4>
                <p>Conversamos sobre sua trajetória e expectativas</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-marker"></div>
              <div className="process-step-content">
                <h4>Desafio técnico</h4>
                <p>Avaliamos suas habilidades práticas</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-marker"></div>
              <div className="process-step-content">
                <h4>Entrevista com gestores</h4>
                <p>Conheça seu futuro time e tire suas dúvidas</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-marker"></div>
              <div className="process-step-content">
                <h4>Proposta</h4>
                <p>Apresentamos nossa oferta e condições</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
