import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Tweeter from '@iconscout/react-unicons/icons/uil-twitter';
import Youtube from '@iconscout/react-unicons/icons/uil-youtube';
import wave from '../../img/wave.png'
//Here we are using icons from Library (unicons)
const Footer = () => {
  return (
    <div>
        <div className="footer">
        <img src={wave} alt=""  style={{width:'100%' ,height:"20rem"}}/>
        <div className="f-content">
            <span>rk0177cs@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
                <Tweeter color='white' size='3rem'/>
                <Youtube color='white' size='3rem'/>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Footer