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
    image: "/placeholder.svg?height=400&width=600",
    category: "web",
  },
  {
    id: 2,
    title: "Squeeze Page",
    subtitle: "Campanha Leads Automotivo",
    image: "/placeholder.svg?height=400&width=600",
    category: "web",
  },
  {
    id: 3,
    title: "Landing Page",
    subtitle: "Startup Área Médica",
    image: "/placeholder.svg?height=400&width=600",
    category: "web",
  },
  {
    id: 4,
    title: "Identidade Visual",
    subtitle: "Semana Acadêmica Direito UFPel",
    image: "/placeholder.svg?height=400&width=600",
    category: "branding",
  },
  {
    id: 5,
    title: "Embalagem",
    subtitle: "Monster Energy — Monster High Edition",
    image: "/placeholder.svg?height=400&width=600",
    category: "design",
  },
  {
    id: 6,
    title: "Landing Page",
    subtitle: "Foco em campanha para setor imobiliário",
    image: "/placeholder.svg?height=400&width=600",
    category: "web",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredItem, setHoveredItem] = useState(null)
  const cursorRef = useRef(null)

  const categories = [
    { id: "all", name: "Todos" },
    { id: "web", name: "Web" },
    { id: "branding", name: "Branding" },
    { id: "design", name: "Design" },
  ]

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="projetos" className="section portfolio">
      <div className="customCursor" ref={cursorRef}>
        <span>Ver</span>
      </div>

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

        <div className="filters animate-in animate-in-delay-1">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filterBtn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`item animate-in animate-in-delay-${(index % 3) + 2}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
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
                    <Link href={`/projeto/${item.id}`} className="viewBtn">
                      Ver detalhes <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta animate-in animate-in-delay-5">
          <Link href="/projetos" className="btn btn-outline">
            Ver mais projetos
          </Link>
        </div>
      </div>
    </section>
  )
}
