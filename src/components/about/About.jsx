import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import { MdWorkOutline } from "react-icons/md";
import { LuFolders } from "react-icons/lu";

const About = () => {
  return (
    <section id="about">
      <h5>Apprendre à connaître plus</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>9+ mois de Freelance</small>
            </article>

            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Stage</h5>
              <small>
                3 mois Chez Fablab Solidaire Mamiratra
              </small>
            </article>

            <article className="about__card">
              <LuFolders className="about__icon" />
              <h5>Projets</h5>
              <small>20+ projets achevés</small>
            </article>
          </div>

          <p>
            Je suis un développeur web passionné et motivé qui cherche à faire
            ses preuves dans l'industrie. Bien que je n'aie pas encore
            d'expérience professionnelle, je crois en ma valeur et en mes
            compétences en matière de codage. Je suis un développeur autodidacte
            qui a passé des heures à apprendre et à pratiquer différents
            langages de programmation, frameworks et outils. Mes compétences combinées à ma motivation et mon désir
            d'apprendre feront de moi un atout pour toute entreprise qui me
            donnera l'opportunité de travailler avec elle.
          </p>

          <a href="#contact" className="btn btn-primary">
            Discutons
          </a>
        </div>
      </div>
    </section>
  );
}

export default About