import React from 'react';
import CV from '../../assets/CV.pdf';

export const CTA = () => {
  return (
    <div className="cta">
      {/* Botón para descargar CV */}
      <a href={CV} className="btn" download>
        Descargar CV
      </a>

      {/* Botón para ir a la sección de contacto */}
      <a href="#contact" className="btn btn-primary">
        Hablemos!
      </a>
    </div>
  );
};

export default CTA;
