import React from 'react';
import CV from '../../assets/CV.pdf';
import { useLang } from '../../i18n/LanguageContext';

export const CTA = () => {
  const { t } = useLang();

  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        {t.header.downloadCV}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t.header.letsTalk}
      </a>
    </div>
  );
};

export default CTA;
