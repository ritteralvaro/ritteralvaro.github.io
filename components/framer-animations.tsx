"use client"

import { useEffect } from "react"

// Função para inicializar as animações inspiradas no Framer
export default function FramerAnimations() {
  useEffect(() => {
    // Animação de entrada para elementos com a classe .animate-in
    const animateInElements = document.querySelectorAll(".animate-in")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    animateInElements.forEach((el) => {
      observer.observe(el)
    })

    // Efeito de parallax para elementos com a classe .parallax
    const parallaxElements = document.querySelectorAll(".parallax")

    const handleScroll = () => {
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute("data-speed") || "0.1"
        const yPos = window.scrollY * Number.parseFloat(speed)
        el.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)

    // Efeito de hover para elementos com a classe .hover-glow
    const hoverGlowElements = document.querySelectorAll(".hover-glow")

    hoverGlowElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        el.style.setProperty("--x-pos", `${x}px`)
        el.style.setProperty("--y-pos", `${y}px`)
        el.classList.add("glowing")
      })

      el.addEventListener("mouseleave", () => {
        el.classList.remove("glowing")
      })
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return null
}
