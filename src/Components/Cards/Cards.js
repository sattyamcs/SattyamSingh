import React,{useContext} from 'react'
import './Cards.css'
import { themeContext } from "../../Context";

const Cards = ({emoji,heading,details}) => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
        <div className="Cards">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span style={{ color: darkMode ? "white" : "" }}>{details}</span>
            <button className='c-button'>Learn More</button>
        </div>
    </div>
  )
}

export default Cards