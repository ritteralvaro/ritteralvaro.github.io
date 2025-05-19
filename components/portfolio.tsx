"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Portfolio data based on the current site
const portfolioItems = [
  {
    id: 1,
    title: "Site",
    subtitle: "Coworking em Pelotas - RS",
    image: "/coworking.png",
    link: "https://coworkingnucleo.com.br",
    image: "/coworking.png",
    link: "https://coworkingnucleo.com.br",
  },
  {
    id: 2,
    title: "Squeeze Page",
    subtitle: "Campanha Leads Automotivo",
    image: "/repasses.png",
    link: "https://repasses.nissulgalaseminovos.com.br",
    image: "/repasses.png",
    link: "https://repasses.nissulgalaseminovos.com.br",
  },
  {
    id: 3,
    title: "Landing Page",
    subtitle: "Startup Área Médica",
    image: "/protocolo.png",
    link: "https://www.protocolodoc.com.br",
    image: "/protocolo.png",
    link: "https://www.protocolodoc.com.br",
  },
  {
    id: 4,
    title: "Identidade Visual",
    subtitle: "Semana Acadêmica Direito UFPel",
    image: "/semac.webp",
    link: "https://www.behance.net/gallery/190837585/Identidade-Visual-de-Evento-Academico-55-SEMAC",
  },
  {
    id: 5,
    title: "Embalagem",
    subtitle: "Monster Energy — Monster High Edition",
    image: "/monster.webp",
    link: "https://www.behance.net/gallery/190837585/Identidade-Visual-de-Evento-Academico-55-SEMAC",
  },
  {
    id: 6,
    title: "Landing Page",
    subtitle: "Foco em campanha para setor jurídico",
    image: "/decorando.png",
    link: "https://paginas.decorandoaleiseca.com.br/ilimitada",
    subtitle: "Foco em campanha para setor jurídico",
    image: "/decorando.png",
    link: "https://paginas.decorandoaleiseca.com.br/ilimitada",
  },
]

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const handleMouseEnter = (id: number) => {
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const handleMouseEnter = (id: number) => {
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <section id="projetos" className="section portfolio">
      <div className="container">
        <h2 className="section-title">PROJETOS</h2>

        <div className="intro animate-in">
          <h3 className="introTitle">
            Trabalhos <span className="highlight">selecionados</span> com foco em resultados
          </h3>
          <p className="introText">
            Conheça alguns dos projetos que desenvolvi para clientes de diferentes segmentos, sempre com o objetivo de
            criar soluções que geram impacto e resultados mensuráveis.
          </p>
        </div>

        <div className="grid">
          {portfolioItems.map((item, index) => (
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`item animate-in animate-in-delay-${(index % 3) + 2}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              <div className="imageContainer">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="image"
                />
                <div className={`overlay ${hoveredItem === item.id ? "active" : ""}`}>
                  <div className="overlayContent">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <Link href={item.link} className="viewBtn" target="_blank" rel="noopener noreferrer">
                      Ver detalhes <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta animate-in animate-in-delay-5">
          <Link
            className="btn btn-outline"
            href="https://www.behance.net/ritteralvaro" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          <Link
            className="btn btn-outline"
            href="https://www.behance.net/ritteralvaro" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ver mais projetos
          </Link>
        </div>
      </div>
    </section>
  )
}
