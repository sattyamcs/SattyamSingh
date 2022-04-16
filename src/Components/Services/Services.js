import React, { useContext } from "react";
import './Service.css'
import Glasses from '../../img/glasses.png'
import Cards from '../Cards/Cards'
import Resume from './SattyamRE1.pdf'
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'


const Services = () => {
  //For transition

  const transition = { duration: 2, type: 'spring' }

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="services">
        {/* Left side */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            I have experience in Designing and Development over Frontend Technologies.
            <br />
           UI/UX Developer/Front-End Developer
          </span>
          <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
          </a>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* Right Side */}
        <div className="cards">
          {/* Passing props to the card component */}
          {/* <div style={{ left: '14rem' }}> */}
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
          >
            <Cards
              emoji={Glasses}
              heading={"Design"}
              details={"Figma,Adobe and more.."}
            />
          </motion.div>
        {/* </div> */}
        {/* Second Card  */}
        {/* <div style={{top:'12rem',left:'-4rem'}}> */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Cards
            emoji={Glasses}
            heading={"Developer"}
            details={"HTML,CSS,JS and ReactJs"}
          />
        </motion.div>
      {/* </div> */}
      {/* Third card  */}
      {/* <div style={{top:'19rem',left:'12rem'}} > */}
      <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
      >
        <Cards
          emoji={Glasses}
          heading={"UI/UX"}
          details={"Bootstrap, Tailwind CSS"}
        />
      </motion.div>
      {/* </div> */}
      <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
      </div >
    </div >
  )
}

export default Services