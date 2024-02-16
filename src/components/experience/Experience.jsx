import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experiences = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
           
           <div>
           <h4>HTML</h4>
            <small className="text-light ">Experienced</small> 
            </div> 
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className="text-light ">Experienced</small> 
            </div>
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light ">Experienced</small> 
            </div>
    
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light ">Experienced</small> 
            </div>

            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React JS</h4>
            <small className="text-light ">Advanced</small> 
            </div>

            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Git and Github</h4>
            <small className="text-light ">Experienced</small> 
            </div>

            </article>
          </div>
          </div>
          <div className="experience__backend">
            
          <h3> Backend  development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>.NET</h4>
            <small className="text-light ">intermediate</small> 
            </div>

            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL Server</h4>
            <small className="text-light ">Intermediate</small> 
            </div>
       
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Entitities Framework</h4>
            <small className="text-light ">Intermediate</small> 
            </div>
  
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>PostgreSql</h4>
            <small className="text-light ">Learning</small> 
            </div>

            </article>
          
          </div>
        </div>
     
    </div>
   
      </section>
  )
}

export default Experiences