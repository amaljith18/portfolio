import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_image from '../../assets/profile_image_1.jpeg'
const About = () => {
  return (
    <div  id='ABOUT ME'className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={about_image} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>An experienced React.js Frontend Developer with 3 years of expertise in creating responsive and dynamic web applications.</p>
                <p>Skilled in modern UI/UX design, state management, and API integration. Completed Full Stack Development training, strengthening end-to-end development capabilities.</p>
            </div>
            <div className="about-skills">
                <div className="about-skillset">
                <div className="about-skill-frontend">
                    <h1>Frontend-Skills</h1>
                   <div className="about-skill"><p>React.js</p></div> 
                   <div className="about-skill"><p>JavaScript (ES6+)</p></div> 
                   <div className="about-skill"><p>HTML5</p></div> 
                   <div className="about-skill"><p>CSS3</p></div>
                   <div className="about-skill"><p>Typescript</p></div>
                   <div className="about-skill"><p>Material-UI</p></div> 
                   <div className="about-skill"><p>Tailwind CSS</p></div> 
                   <div className="about-skill"><p>Bootstrap</p></div>
                   <div className="about-skill"><p>Nextjs</p></div> 
                </div>
                <div className="about-skill-backend">
                    <h1>Backend-Skills</h1>
                   <div className="about-skill"><p>Redux</p></div> 
                   <div className="about-skill"><p>Context API</p></div> 
                   <div className="about-skill"><p>Node.js</p></div> 
                   <div className="about-skill"><p>Express.js</p></div> 
                   <div className="about-skill"><p>Sharepoint</p></div> 
                   <div className="about-skill"><p>MongoDB</p></div> 
                   <div className="about-skill"><p>Firebase</p></div>
                   <div className="about-skill"><p>GraphSql</p></div>
                   <div className="about-skill"><p>Git</p></div> 
                   <div className="about-skill"><p>Azure</p></div>
                </div>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                <h1>3</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Technology Mastered</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About
