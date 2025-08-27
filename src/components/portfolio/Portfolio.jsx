import React from 'react';
import './portfolio.css';
// 1. Importa los datos desde el archivo separado
import { data } from './portfolioData'; 

const Portfolio = () => { // Nombre del componente en PascalCase
  return (
    <section id="portfolio">
      <h5>Mis Trabajos Recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={`Imagen del proyecto ${title}`} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {/* 4. El botón de Demo solo se muestra si el link 'demo' existe */}
                  {demo && (
                    <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Ver Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default Portfolio;