import React from 'react';
import './contact.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';

const Contact = () => {
  const { t } = useLang();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact">
      <motion.h5
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.contact.subtitle}
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t.contact.title}
      </motion.h2>

      <div className="container contact__container">
        <div className="contact__options">

          {/* LinkedIn */}
          <motion.article
            className="contact__option"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BsLinkedin className="contact__option-icon" aria-hidden="true" />
            <div>
              <h4>{t.contact.linkedin}</h4>
              <h5>{t.contact.linkedinName}</h5>
              <a
                href="https://www.linkedin.com/in/lucas-clemente-front-end-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {t.contact.visitProfile}
              </a>
            </div>
          </motion.article>

          {/* GitHub */}
          <motion.article
            className="contact__option"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaGithub className="contact__option-icon" aria-hidden="true" />
            <div>
              <h4>{t.contact.github}</h4>
              <h5>lucasclemente08</h5>
              <a
                href="https://github.com/lucasclemente08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                {t.contact.viewRepos}
              </a>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
};

export default Contact;
