import React from 'react'
import './testimonials.css'
import { motion } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

const Testimonials = () => {
  const { t } = useLang()

  const testimonials = [
    { id: 1, name: t.testimonials.client1, role: t.testimonials.client1Role, quote: t.testimonials.client1Quote, rating: 5 },
    { id: 2, name: t.testimonials.client2, role: t.testimonials.client2Role, quote: t.testimonials.client2Quote, rating: 5 }
  ]

  return (
    <section id="testimonials">
      <h5>{t.testimonials.subtitle}</h5>
      <h2>{t.testimonials.title}</h2>

      <div className="container testimonials__container">
        {testimonials.map(({ id, name, role, quote, rating }, index) => (
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
