import "../styles/IntroSection.css"
export default function IntroSection() {
  return (
    <section className="intro-section">
      <h2 className="intro-title">Olá, sou a <span className="highlight">Rob!</span></h2>
      <p className="intro-subtitle">
        Web Designer apaixonada por criar experiências visuais que conectam e inspiram.
      </p>
      <div className="intro-description">
        <img src="/rob.png" alt="Foto de Rob" className="intro-avatar" />
        <p>
          Tenho talento para unir estética e funcionalidade que capturam a essência de uma marca.
          É com experiência de verdade que valorizo as necessidades do projeto, desde o entendimento até o refinamento visual.
          Com sensibilidade e técnica, busco traduzir emoções em design.
        </p>
      </div>
    </section>
  );
}
