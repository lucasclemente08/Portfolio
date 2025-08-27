import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lucas Clemente</a>
      
      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        {/* CORREGIDO: El enlace a #portfolio ahora dice "Portafolio" */}
        <li><a href="#portfolio">Portafolio</a></li>
        {/* CORREGIDO: El enlace a #contact ahora dice "Contacto" */}
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a 
          href="https://www.linkedin.com/in/lucas-clemente-front-end-developer/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Perfil de LinkedIn de Lucas Clemente"
        >
          <BsLinkedin/>
        </a>
        <a 
          href="https://github.com/lucasclemente08" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Perfil de GitHub de Lucas Clemente"
        >
          <BsGithub/>
        </a>
        <a 
          href="https://www.instagram.com/lucasclemente08/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Perfil de Instagram de Lucas Clemente"
        >
          <AiFillInstagram/>
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Lucas Clemente {new Date().getFullYear()}. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer