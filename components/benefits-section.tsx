export default function BenefitsSection() {
  return (
    <section className="section" id="beneficios">
      <div className="section-header">
        <h2>Benefícios</h2>
        <div className="section-line"></div>
      </div>
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-icon">🌎</div>
          <h3>Trabalho remoto</h3>
          <p>Flexibilidade para trabalhar de onde você estiver</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">📚</div>
          <h3>Desenvolvimento</h3>
          <p>Investimos no seu crescimento profissional</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">🏆</div>
          <h3>Plano de carreira</h3>
          <p>Oportunidades claras de crescimento</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">🏥</div>
          <h3>Plano de saúde</h3>
          <p>Cuidamos do seu bem-estar</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">💻</div>
          <h3>Home office</h3>
          <p>Auxílio para montar seu escritório em casa</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">🎯</div>
          <h3>Ambiente inovador</h3>
          <p>Cultura que valoriza novas ideias</p>
        </div>
      </div>
    </section>
  )
}
