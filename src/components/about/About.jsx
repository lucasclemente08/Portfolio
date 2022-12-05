import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
  <section id="about"> 
  <h5>Get to Know</h5>
  <h2>About me</h2>

  <div className="container about__container">
    <div className="about__me">
     <div className="about__me-image">
      <img src={ME} alt="about image" />
     </div>
    </div>
    <div className="about__content">
   <div className="about__cards">
    <article className='about__card'>
      <FaAward className="about__icon"/>
    <h5>Experience</h5>
    <small> 1 year of Work </small>
    </article>
    <article className='about__card'>
      <VscFolderLibrary className="about__icon"/>
    <h5>Projects</h5>
    <small> +10 Completed </small>
    </article>
 
   </div>
   <p>
    lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis tempore odit doloremque, placeat, dolorem eum id cumque magnam architecto blanditiis sed facere aperiam iste, autem quam sequi possimus voluptatem. lordolor sit lorem ipsum lorem ipsum lorem ipsum
   </p>
   <a href="#contact" className="btn btn-primary">Let's talk</a>
    </div>
  </div>
  </section>
  )
}
