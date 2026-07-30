import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useLang } from '../../i18n/LanguageContext'

export const About = () => {
  const { t } = useLang()

  return (
    <section id="about">
      <h5>{t.about.subtitle}</h5>
      <h2>{t.about.title}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt={t.about.title} />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon" />
              <h5>{t.about.experience}</h5>
              <small>{t.about.experienceText}</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className="about__icon" />
              <h5>{t.about.projects}</h5>
              <small>{t.about.projectsText}</small>
            </article>
          </div>

          <small>{t.about.role}</small>
          <p>{t.about.description}</p>
          <a href="#contact" className="btn btn-primary">{t.about.letsTalk}</a>
        </div>
      </div>
    </section>
  )
}
