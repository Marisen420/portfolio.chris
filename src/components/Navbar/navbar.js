import React from 'react'
import './navbar.css';
import { useState } from 'react';
import logo from '../../assets/assets/icon-c-24.jpg';
import contactImg from '../../assets/assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/assets/menu.png';


const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
          <Link activeClass="active" to="intro" spy={true} offset={-100}  duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass="active" to="skills" spy={true} offset={50} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass="active" to="works" spy={true} offset={-100}  duration={500} className='desktopMenuListItem'>Portfolio</Link>
          <Link activeClass="active" to="contactPage" spy={true} offset={-50}  duration={500} className='desktopMenuListItem'>My Skills</Link>

        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>

         <img src={contactImg} alt="contactImage" className='desktopMenuImg'/>Contact Me
        </button>
        <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/> 
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
          <Link activeClass="active" to="intro"  spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass="active" to="works"  spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>My Skills</Link>
          <Link activeClass="active" to="contact"spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
          
        </div>
    </nav>
  )
}

export default Navbar