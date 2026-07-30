import React from 'react'
import './testimonials.css'
import { motion } from 'framer-motion'

const testimonialsData = [
  {
    id: 1,
    name: 'Cliente Fiverr',
    role: 'Fiverr Buyer',
    quote: 'Excelente trabajo, muy profesional y entregado a tiempo. Lo recomiendo totalmente.',
    rating: 5
  },
  {
    id: 2,
    name: 'Colaborador',
    role: 'Full Stack Developer',
    quote: 'Lucas es un gran desarrollador frontend, siempre dispuesto a ayudar y con mucha iniciativa.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Lo que dicen de mí</h5>
      <h2>Testimonios</h2>

      <div className="container testimonials__container">
        {testimonialsData.map(({ id, name, role, quote, rating }, index) => (
          <motion.article
            key={id}
            className="testimonial__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="testimonial__rating">
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i} className="testimonial__star">★</span>
              ))}
            </div>
            <p className="testimonial__quote">"{quote}"</p>
            <h4>{name}</h4>
            <small className="text-light">{role}</small>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
