import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BiBookAlt } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import { useLang } from '../../i18n/LanguageContext'

const Nav = () => {
  const { t } = useLang()
  const [activeNav, setActiveNav] = useState('#')

  const links = [
    { href: '#', label: t.nav.home, icon: <AiFillHome /> },
    { href: '#about', label: t.nav.about, icon: <BiUserCircle /> },
    { href: '#experience', label: t.nav.experience, icon: <BiBookAlt /> },
    { href: '#services', label: t.nav.services, icon: <RiServiceLine /> },
    { href: '#contact', label: t.nav.contact, icon: <BiMessageSquareDetail /> }
  ]

  return (
    <nav>
      {links.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          data-label={label}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? 'active' : ''}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </nav>
  )
}

export default Nav
