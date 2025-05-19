import Image from "next/image"

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="backgroundBlur"></div>

      <div className="container">
        <h2 className="section-title">SOBRE MIM</h2>

        <div className="content">
          <div className="imageContainer animate-in">
            <div className="imageBorder"></div>
            <Image
              src="/alvaro premio.jpg"
              alt="Alvaro Ritter"
              width={500}
              height={500}
              className="image"
            />
            <div className="imageGlow"></div>
          </div>
          <div className="text">
            <h3 className="title animate-in animate-in-delay-1">
              Designer com foco em <span className="highlight">resultados concretos</span>
            </h3>
            <div className="description animate-in animate-in-delay-2">
              <p>
                Sou Alvaro Ritter, Designer Gráfico por formação, mas atuo em diversas frentes, como UX/UI Designer,
                diretor de criação, growth hacker, designer de materiais gráficos e digitais, redator, além de gestor de
                demandas e atendimento ao cliente.
              </p>
              <p>
                Comecei como fotógrafo manipulador de imagens com domínio em Adobe Photoshop, aprimorado pela
                experiência de trabalho na Loja Krause. Atualmente, lidero o time na Cluster, uma agência de marketing
                de performance, onde também sou responsável pelo atendimento e gestão de demandas.
              </p>
              <p>
                Minha especialidade é publicidade e liderança. Atendo pequenas e médias empresas, focando em melhorar
                processos e vendas. Dentre as maiores conquistas, destaco que, lá na empresa, consegui criar um ambiente
                de entregas mais estratégicas e alinhadas com as expectativas dos clientes, aumentando a eficiência e
                relevância dos projetos.
              </p>
            </div>

            <div className="skills animate-in animate-in-delay-3">
              <div className="skillCategory">
                <h4>Design</h4>
                <ul>
                  <li>UI/UX Design</li>
                  <li>Identidade Visual</li>
                  <li>Design Gráfico</li>
                  <li>Direção de Arte</li>
                </ul>
              </div>
              <div className="skillCategory">
                <h4>Marketing</h4>
                <ul>
                  <li>Growth Hacking</li>
                  <li>Estratégia Digital</li>
                  <li>Performance</li>
                  <li>Branding</li>
                </ul>
              </div>
              <div className="skillCategory">
                <h4>Produção</h4>
                <ul>
                  <li>Fotografia</li>
                  <li>Audiovisual</li>
                  <li>Edição</li>
                  <li>Direção</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
