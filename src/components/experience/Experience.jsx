import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { useLang } from '../../i18n/LanguageContext'

const Experiences = () => {
  const { t } = useLang()

  const frontend = [
    { name: 'HTML', level: t.experience.advanced, levelKey: 'advanced' },
    { name: 'CSS', level: t.experience.advanced, levelKey: 'advanced' },
    { name: 'JavaScript', level: t.experience.advanced, levelKey: 'advanced' },
    { name: 'Tailwind', level: t.experience.advanced, levelKey: 'advanced' },
    { name: 'React JS', level: t.experience.advanced, levelKey: 'advanced' },
    { name: 'Git y GitHub', level: t.experience.advanced, levelKey: 'advanced' }
  ]

  const backend = [
    { name: '.NET', level: t.experience.intermediate, levelKey: 'intermediate' },
    { name: 'SQL Server', level: t.experience.intermediate, levelKey: 'intermediate' },
    { name: 'Entity Framework', level: t.experience.intermediate, levelKey: 'intermediate' },
    { name: 'PostgreSQL', level: t.experience.learning, levelKey: 'learning' }
  ]

  return (
    <section id="experience" className="reveal">
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
                  <small className="text-light" data-level={skill.levelKey}>{skill.level}</small>
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
                  <small className="text-light" data-level={skill.levelKey}>{skill.level}</small>
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
