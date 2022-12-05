import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

 const HeaderSocials = () => {
  return (
    <div className="header__socials">
  
   <a href="https://www.linkedin.com/in/lucas-clemente-front-end-developer/" target="_blank" className=""><BsLinkedin/></a>
    <a href="https://github.com/lucasclemente08" target="_blank" className=""><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials