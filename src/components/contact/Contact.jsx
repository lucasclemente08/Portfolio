import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

 const Contact = () => {


const form=useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_jojg2hi', 'template_vxof008', form.current, 'T40sCmS1tg8JZDha_')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};


  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>lucasclemente2016@gmail.com</h5>
              <a  target="_blank" href="https://mailto:lucasclemente2016@gmail.com">Send a mail</a>
          </article>
          <article className="contact__option">
            <BsLinkedin  className="contact__option-icon"/>
              <h4>LinkedIn</h4>
              <h5>FrontEnd Developer</h5>
              <a target="_blank" href="https://www.linkedin.com/in/lucas-clemente-front-end-developer?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAkCHYqvLT7ufkebEXdTT8Q%3D%3D">Send a message</a>
          </article>
 
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your email" required/>
          
          <textarea name="message" id="" placeholder="Your message"cols="30" rows="7"></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
      

    </section>
  )
}
export default Contact
