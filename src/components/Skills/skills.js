import React from 'react';
import './skills.css';
import WebDesign from '../../assets/assets/web-design.jpg';
import AppDesign from '../../assets/assets/images.jpeg';
import Adobe  from '../../assets/assets/adobe.jpg';
import VN  from '../../assets/assets/vn.jpg';
import VScode from '../../assets/assets/vscode.png'; 

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate Fullstack web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, React, Node.js and Redux as well as design software.</span>
        <div className='skillBars'>
            
            <div className='skillBar'>
            <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p> The process of building and maintaining websites and web applications.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Development</h2>
                    <p>It can be responsive and accessible across various devices and platforms.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={VScode} alt="VS code" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>VS code editor</h2>
                    <p> It is a open-source code editor developed by Microsoft.</p>
                </div>
            </div>
           
            <div className='skillBar'>
                <img src={Adobe} alt="Adobe" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Adobe Photoshop</h2>
                    <p>It is a powerful software application primarily used for editing and manipulating digital images</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={VN} alt="VN editor" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>VN Video Editor</h2>
                    <p>It is a popular mobile video editing application.</p>
                </div>
            </div>

            
        </div>
    </section>
  );
}

export default Skills;