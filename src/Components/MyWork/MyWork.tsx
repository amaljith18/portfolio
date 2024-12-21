import React from 'react'
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import Mywork_data from '../../assets/mywork_data';
import Arrow_icon from "../../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div id='PORTFOLIO' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {Mywork_data.map((work, index)=>{
            return  <img key={index} src={work.w_img} alt="" />
        })}
      </div>
        <div className="mywork-showmore">
        <a 
          href="https://github.com/amaljith18" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          Show more on GitHub
        </a>
          <img src={Arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
