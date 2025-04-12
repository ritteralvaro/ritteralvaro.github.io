import styles from "./partners.module.css"

export default function Partners() {
  const partners = [
    { name: "Cluster", id: "cluster" },
    { name: "Fábrica Podcast", id: "fabrica-podcast" },
    { name: "núcleo coWorking", id: "nucleo-coworking" },
    { name: "gibessa.dev", id: "gibessa" },
    { name: "Wardian", id: "wardian" },
    { name: "CEHUS - UFPel", id: "cehus" },
  ]

  return (
    <section className={`section ${styles.partners}`}>
      <div className="container">
        <h2 className="section-title">PARCEIROS</h2>

        <div className={styles.grid}>
          {partners.map((partner, index) => (
            <div key={partner.id} className={`${styles.partner} animate-in animate-in-delay-${(index % 3) + 1}`}>
              <div className={`${styles.partnerLogo} hover-glow`}>
                <span>{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
