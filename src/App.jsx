import React, { useEffect } from 'react'
import Footer from './components/footer/Footer'
import { About } from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Experiences from './components/experience/Experience'
import Header from './components/header/Header'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import ScrollProgress from './components/ScrollProgress'

const App = () => {
  // ── Scroll-reveal observer ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ScrollProgress />
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
