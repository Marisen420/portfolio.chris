import React from 'react';
import './contact.css';
import HTML from '../../assets/assets/html.webp';
import react from '../../assets/assets/react.png';
import Node from '../../assets/assets/node.js.png';
import Redux from '../../assets/assets/redux.png';
import FacebookIcon from '../../assets/assets/facebook-icon.png';
import InstagramIcon from '../../assets/assets/instagram.png'; 
import WhatsappIcon from '../../assets/assets/whatsappicon.png';
import './email.js';

const Contact = () => {
  
  return (
    <section id='contactPage'>
      <div id="skills">
        <h1 className='contactPageTitle'>My Skills</h1>
        <p className='clientDesc'> Proficient in HTML, CSS, JavaScript, TypeScript, and the modern frontend framework React. Experienced in state management with Redux and backend development using Node.js.</p>
      <div className='clientImgs'>
        <img src={HTML} alt="html" className='clientImg'></img>
        <img src={react} alt="react" className='clientImg'></img>
        <img src={Node} alt="node" className='clientImg'></img>
        <img src={Redux} alt="redux" className='clientImg'></img>
      </div>
      </div>
        <div id="contact">
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className='contactForm'>
            <input type= "text" className='name' placeholder='Your Name' />
            <input type= "email" className='email' placeholder='Your Email' />
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value="Send" className='submitBtn'>Submit</button>
            
            <div className='links'>
              <img src={FacebookIcon} alt="Facebook" className='link'></img>
              <img src={InstagramIcon} alt="Instagram" className='link'></img>
              <img src={WhatsappIcon} alt= "Whatsapp" className='link'></img>
            </div>
          </form>
        </div>
  </section>
  )
}

export default Contact;