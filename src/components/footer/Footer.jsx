import React, { useState, useEffect } from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FiArrowUp } from 'react-icons/fi'
import { useLang } from '../../i18n/LanguageContext'

const Footer = () => {
  const { t } = useLang()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        <small>&copy; {new Date().getFullYear()} Lucas Clemente — {t.footer.copyright}</small>
      </div>

      {/* Back to top */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  )
}

export default Footer
