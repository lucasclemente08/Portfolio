import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import LanguageToggle from './LanguageToggle';
import { motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';

const Header = () => {
  const { t } = useLang();

  return (
    <header>
      <LanguageToggle />
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.header.greeting}
        </motion.h5>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Lucas Clemente
        </motion.h1>

        <motion.h5
          className="text-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {t.header.role}
        </motion.h5>

        <CTA />
        <HeaderSocials />

        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={ME} alt="Lucas Clemente" />
        </motion.div>

        <motion.a
          href="#contact"
          className="scroll__down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {t.header.scrollDown}
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
