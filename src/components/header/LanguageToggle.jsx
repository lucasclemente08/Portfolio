import React from 'react'
import { useLang } from '../../i18n/LanguageContext'
import './languageToggle.css'

const LanguageToggle = () => {
  const { lang, toggleLang } = useLang()

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
      <span className="lang-separator">|</span>
      <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
    </button>
  )
}

export default LanguageToggle
