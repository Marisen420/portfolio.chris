import React from 'react';
import './works.css';
import JScalculator from '../../assets/assets/js calculator.jpg';
import RandamQuoteMachine from '../../assets/assets/random quote machine.png'
import Stopclock from '../../assets/assets/drummachine.jpg';
import DrumMachine from '../../assets/assets/Drum machine.png';


const Works = () => {
  return (
   <section id="works">
    <h2 className="workstitle">My portfolio</h2>
    <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help businesses acheive their goals and create a strong online presence. </span>
    <div className='worksImgs'>
      <img src={JScalculator} alt="JS Calculator" className='worksImg'/>
      <img src={RandamQuoteMachine} alt="Random Quote Machine" className='worksImg'/>
      <img src={DrumMachine} alt="Drum Machine" className='worksImg'/>
      <img src={Stopclock} alt="Stopclock" className='worksImg'/>
      </div>
    </section>
  );
}

export default Works