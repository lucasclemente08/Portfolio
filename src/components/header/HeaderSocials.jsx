import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/lucas-clemente-front-end-developer/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil de LinkedIn de Lucas Clemente"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/lucasclemente08"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil de GitHub de Lucas Clemente"
      >
        <BsGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
