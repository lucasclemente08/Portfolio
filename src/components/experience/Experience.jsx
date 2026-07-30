import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { useLang } from '../../i18n/LanguageContext'

const Experiences = () => {
  const { t } = useLang()

  const frontend = [
    { name: 'HTML', level: t.experience.advanced },
    { name: 'CSS', level: t.experience.advanced },
    { name: 'JavaScript', level: t.experience.advanced },
    { name: 'Tailwind', level: t.experience.advanced },
    { name: 'React JS', level: t.experience.advanced },
    { name: 'Git y GitHub', level: t.experience.advanced }
  ]

  const backend = [
    { name: '.NET', level: t.experience.intermediate },
    { name: 'SQL Server', level: t.experience.intermediate },
    { name: 'Entity Framework', level: t.experience.intermediate },
    { name: 'PostgreSQL', level: t.experience.learning }
  ]

  return (
    <section id="experience">
      <h5>{t.experience.subtitle}</h5>
      <h2>{t.experience.title}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t.experience.frontend}</h3>
          <div className="experience__content">
            {frontend.map((skill, i) => (
              <article key={i} className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>{t.experience.backend}</h3>
          <div className="experience__content">
            {backend.map((skill, i) => (
              <article key={i} className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
