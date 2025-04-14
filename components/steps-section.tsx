export default function StepsSection() {
  return (
    <section className="section" id="como-funciona">
      <div className="section-header">
        <h2>Como funciona?</h2>
        <div className="section-line"></div>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">01</div>
          <h3>Inscreva-se</h3>
          <p>Escolha a vaga que mais combina com você e preencha o formulário de inscrição.</p>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <h3>Entrevista</h3>
          <p>Converse com nosso time de recrutamento e com os gestores da área.</p>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <h3>Proposta</h3>
          <p>Receba uma proposta personalizada e inicie sua jornada na Cluster.</p>
        </div>
      </div>
    </section>
  )
}
