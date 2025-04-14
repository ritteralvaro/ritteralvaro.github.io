import Image from "next/image"

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/placeholder.svg?height=50&width=150" alt="Cluster Logo" width={150} height={50} />
      </div>
      <div className="nav-links">
        <a href="#como-funciona">Como funciona?</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#vagas">Vagas</a>
        <a href="#processo">Processo</a>
      </div>
      <a href="#vagas" className="cta-button">
        Inscreva-se
      </a>
    </nav>
  )
}
