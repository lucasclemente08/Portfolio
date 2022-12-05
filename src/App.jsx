import React from 'react'
import Footer from './components/footer/Footer'
import { About } from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Experiences from './components/experience/Experience'
import  Header  from './components/header/Header'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
     
    <Header />
    <Nav />
    <About />
    <Experiences />
    <Portfolio />

    <Contact />

    <Footer />
    </> 
  )
}

export default App
