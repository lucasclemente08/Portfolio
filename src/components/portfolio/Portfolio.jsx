import React from 'react';
import './portfolio.css';
import { data } from './portfolioData';
import { useLang } from '../../i18n/LanguageContext';

const Portfolio = () => {
  const { t } = useLang();

  return (
    <section id="portfolio" className="reveal">
      <h5>{t.portfolio.subtitle}</h5>
      <h2>{t.portfolio.title}</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }, index) => {
          return (
            <article key={id} className="portfolio__item" style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="portfolio__item-image">
                <img src={image} alt={`Project ${title}`} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  {t.portfolio.github}
                </a>
                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    {t.portfolio.viewDemo}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
