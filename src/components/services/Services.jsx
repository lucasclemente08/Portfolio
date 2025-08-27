import React from 'react';
import './services.css';
import { SiFiverr } from "react-icons/si";
import { SiGooglechrome } from 'react-icons/si';

const Services = () => {
  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">

        {/* Fiverr */}
        <article className="service__card">
          <SiFiverr className="service__icon" />
          <h3>Fiverr</h3>
          <p>Mis servicios como desarrollador FrontEnd en Fiverr.</p>
          <a
            href="https://es.fiverr.com/s/wkobo8D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver mis servicios
          </a>
        </article>

        {/* Chrome Extensions */}
        <article className="service__card">
          <SiGooglechrome className="service__icon" />
          <h3>Extensiones de Chrome</h3>
          <p>Extensiones que desarrollé y publiqué en Chrome Web Store.</p>
          <a
            href="https://chrome.google.com/webstore/detail/tu-extension-id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn "
          >
            Ver extensión
          </a>
        </article>

      </div>
    </section>
  );
};

export default Services;
