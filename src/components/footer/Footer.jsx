import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { useLang } from '../../i18n/LanguageContext'

const Footer = () => {
  const { t } = useLang()

  return (
    <footer>
      <a href="#" className='footer__logo'>Lucas Clemente</a>

      <ul className='permalinks'>
        <li><a href="#">{t.footer.home}</a></li>
        <li><a href="#about">{t.footer.about}</a></li>
        <li><a href="#experience">{t.footer.experience}</a></li>
        <li><a href="#portfolio">{t.footer.portfolio}</a></li>
        <li><a href="#contact">{t.footer.contact}</a></li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/lucas-clemente-front-end-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/lucasclemente08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/lucasclemente08/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <AiFillInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lucas Clemente {new Date().getFullYear()}. {t.footer.copyright}</small>
      </div>
    </footer>
  )
}

export default Footer
