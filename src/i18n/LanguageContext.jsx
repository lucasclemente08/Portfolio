import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    // Detect from localStorage or browser
    const saved = localStorage.getItem('portfolio-lang')
    if (saved === 'es' || saved === 'en') return saved
    const browserLang = navigator.language?.toLowerCase() || ''
    return browserLang.startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'))
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
