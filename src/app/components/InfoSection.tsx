// src/app/components/InfoSection.tsx
export default function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-column">
        <h3>Educação Acadêmica</h3>
        <ul>
          <li>UFPE — Ciência da Computação</li>
          <li>Decolar Tech 2025</li>
        </ul>
        <h3>Technical Skills</h3>
        <ul>
          <li>Figma • HTML • CSS • JS</li>
        </ul>
      </div>

      <div className="info-column">
        <h3>Soft Skills</h3>
        <ul>
          <li>Empatia • Comunicação • Criatividade</li>
        </ul>
        <h3>Idiomas</h3>
        <ul>
          <li>Português • Inglês (Intermediário)</li>
        </ul>
        <h3>Interesses</h3>
        <ul>
          <li>UX • Design de Interação • Motion</li>
        </ul>
      </div>
    </section>
  );
}
