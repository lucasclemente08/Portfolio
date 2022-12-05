import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lucas Clemente</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experiences</a></li>

        <li><a href="#contact">Portfolio</a></li>
        <li><a href="#portfolio">Contact</a></li>


      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/lucas-clemente-front-end-developer/" target="_blank" className=""><BsLinkedin/></a>
    <a href="https://github.com/lucasclemente08" target="_blank" className=""><BsGithub/></a>
    <a href="https://www.instagram.com/lucasclemente08/" target="_blank" className=""><AiFillInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Lucas Clemente. all rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer