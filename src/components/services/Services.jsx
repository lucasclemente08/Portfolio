import React from 'react';
import './services.css';
import { SiFiverr } from "react-icons/si";
import { SiGooglechrome } from 'react-icons/si';
import { useLang } from '../../i18n/LanguageContext';

const Services = () => {
  const { t } = useLang();

  return (
    <section id="services" className="reveal">
      <h5>{t.services.subtitle}</h5>
      <h2>{t.services.title}</h2>

      <div className="container services__container">
        <article className="service__card">
          <SiFiverr className="service__icon" />
          <h3>{t.services.fiverr}</h3>
          <p>{t.services.fiverrDesc}</p>
          <a
            href="https://es.fiverr.com/s/wkobo8D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t.services.viewServices}
          </a>
        </article>

        <article className="service__card">
          <SiGooglechrome className="service__icon" />
          <h3>{t.services.chromeExt}</h3>
          <p>{t.services.chromeExtDesc}</p>
          <a
            href="https://chrome.google.com/webstore/detail/tu-extension-id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t.services.viewExt}
          </a>
        </article>
      </div>
    </section>
  );
};

export default Services;
