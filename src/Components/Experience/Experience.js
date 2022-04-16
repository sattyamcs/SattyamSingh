import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './experience.css'

const Experience = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <div className="experience">
                <div className="achievement">
                    <div className="circle">1+</div>
                    <span style={{color: darkMode?'white':''}}>Years</span>
                    <span>Total Experience</span>
                </div>
                <div className="achievement">
                    <div className="circle">1.2</div>
                    <span style={{color: darkMode?'white':''}}>Years</span>
                    <span>Front-End Development</span>
                </div>
                <div className="achievement">
                    <div className="circle">6</div>
                    <span style={{color: darkMode?'white':''}}>Months</span>
                    <span>ReactJS</span>
                </div>
            </div>
        </div>
    )
}

export default Experience