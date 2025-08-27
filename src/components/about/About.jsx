import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
  <section id="about"> 
<h5>Conóceme</h5>
<h2>Sobre mí</h2>

<div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="imagen sobre mí" />
    </div>
  </div>

  <div className="about__content">
    <div className="about__cards">
      <article className='about__card'>
        <FaAward className="about__icon" />
        <h5>Experiencia</h5>
        <small>1 año de trabajo</small>
      </article>

      <article className='about__card'>
        <VscFolderLibrary className="about__icon" />
        <h5>Proyectos</h5>
        <small>+10 completados</small>
      </article>


 
  
 
   </div>
   <small>Analista de sistema Sistemas y desarrollador</small>
<p> Desarrollador web especializado en crear aplicaciones modernas y eficientes. Proactivo, orientado a resultados y siempre enfocado en entregar soluciones que generen valor. Apasionado por aprender y aplicar nuevas tecnologías para optimizar proyectos y mejorar la experiencia del usuario. </p>
   <a href="#contact" className="btn btn-primary">Hablemos!</a>
    </div>
  </div>
  </section>
  )
}
