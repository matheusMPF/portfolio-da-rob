import "./styles.css";
import PortfoliTitle from "../../../public/portfolio-title.png";
import Image from "next/image";
import { Button } from "@/components/Button";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="portfolio-title">
        <Image src={PortfoliTitle} alt="Portfolio" />
      </div>

      <p className="subtitle">
        Onde o design encontra as estrelas e nasce a sua história guiada por
        experiências.
      </p>
      <div className="hero-buttons">
        <Button
          type="primary"
          action={() => {
            alert("Exectuta uma função aqui");
          }}
        >
          Sobre mim
        </Button>
        <Button
          type="secondary"
          action={() => {
            alert("Executa uma função aqui");
          }}
        >
          Projetos
        </Button>
        <div className="section-img"></div>
      </div>
    </section>
  );
};
