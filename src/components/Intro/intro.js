import React from 'react'
import './intro.css';
import bg from '../../assets/assets/myphoto.png';
import btnImg from '../../assets/assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='intotext'>I'm <span className='introName'>Christina</span><br/>Fullstack WebDeveloper</span>
            <p className='introPara'>I am a skilled web developer with experience in creating <br/> visually appealing and user friendly websites. <br/>christina.c.cc26@gmail.com</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link> 
        </div>
        <img src={bg} alt="Website" className='bg'/>
    </section>
    
  )
}

export default Intro;