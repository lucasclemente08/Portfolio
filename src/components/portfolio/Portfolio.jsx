import React from 'react'
import './portfolio.css'
import IMG1 from  '../../assets/santuario.png'
import IMG2 from  '../../assets/portfolio1.png'
import IMG3 from  '../../assets/portfolio2.png'

const data = [
    {
        id: 1,
        image: IMG1,
        github: 'https://github.com/lucasclemente08/santuario-equidad.github.io',
        title: 'This Project is about the Santuario equidad',
        demo: 'https://lucasclemente08.github.io/santuario-equidad.github.io/'

    }, {
        id: 2,
        image: IMG2,
        github: 'https://github.com/lucasclemente08/Landing-page-travel-',
        title: 'This Project is about the Landing Page Travel',
        demo: 'https://lucasclemente08.github.io/Landing-page-travel-/'
    }, {
        id: 3,
        image: IMG3,
        github: 'https://github.com/lucasclemente08/simulador-Interactivo',
        title: 'This Project is about the simulador interactivo ',
        demo: 'https://lucasclemente08.github.io/simulador-Interactivo/'
    }

]





function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
      return(     
      <article key={id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn ">Github</a>
        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
      </div>
    </article>)
     
        })}




      </div>
    </section>
  )
}

export default Portfolio