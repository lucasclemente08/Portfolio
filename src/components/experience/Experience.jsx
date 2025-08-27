import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experiences = () => {
  return (
    <section id="experience">
      <h5>Mis Habilidades</h5>
      <h2>Mi Experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Avanzado</small> 
              </div> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Avanzado</small> 
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Avanzado</small> 
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Avanzado</small> 
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className="text-light">Avanzado</small> 
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Git y GitHub</h4>
                <small className="text-light">Avanzado</small> 
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Desarrollo Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>.NET</h4>
                <small className="text-light">Intermedio</small> 
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Intermedio</small> 
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Entity Framework</h4>
                <small className="text-light">Intermedio</small> 
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Aprendiendo</small> 
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences