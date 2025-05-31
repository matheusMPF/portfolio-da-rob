import "../styles/HeroSection.css"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="portfolio-title">
        <img src="/images/portfolio-title.png" alt="Portfolio" className="portfolio-img" />
      </div>

      <p className="subtitle">
        Onde o design encontra as estrelas e nasce a sua história guiada por experiências.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">Sobre Mim</button>
        <button className="btn-outline">Projetos</button>
        <div className="section-img">

        </div>
      </div>
    </section>
  );
}
