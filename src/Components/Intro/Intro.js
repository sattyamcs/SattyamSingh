import React, { useContext } from "react";
import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Naukri from '../../img/naukri.png'
import boy from '../../img/boy.png'
import Vector2 from '../../img/Vector2.png'
import { themeContext } from "../../Context";


const Intro = () => {


  //Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span >Hi!  I am </span>
            <span>Sattyam Singh</span>
            <span style={{ color: darkMode ? "white" : "" }}>Front-End/UI developer with experience in developing User Interfaces(UI) Applications and Web Application using HTML,CSS,JavaScript,ReactJS, Bootstrap, Tailwind CSS, JQuery,AJAX,JSON.</span>
          </div>
          <a href="https://www.linkedin.com/in/sattyam-singh/">
          <button className=' button i-button'>Hire Me</button>
          </a>
          <div className="i-icons">
            <a href="https://github.com/sattyamcs">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.naukri.com/mnjuser/profile?id=&orgn=homepage">
              <img src={Naukri} alt="" className='i-naukri' />
            </a>
            <a href="https://www.linkedin.com/in/sattyam-singh/">
              <img src={Linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
        </div>

        {/* Blur divs >> These are given asusual inside a normal div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "30rem",
            width: "25rem",
            height: "20rem",
            left: "25rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro