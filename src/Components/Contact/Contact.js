import React from 'react'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Naukri from '../../img/naukri.png'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact" >
                <div className="w-left">
                    <div className="awesome">
                        <span>Get in Touch</span>
                        <span>With Me</span>
                        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
                    </div>
                </div>

             
                <div className="w-right">
                    <div className="exp">
                        <div className="ach">
                            <span>Email   : </span>
                            <span>rk0177cs@gmail.com</span>
                        </div>
                        <div className="ach">
                            <span>Phone    :    </span>
                            <span>+91-9455562123</span>
                        </div>
                        <div className="ach">
                            <span>Place    :    </span>
                            <span>Noida</span>
                        </div>
                    </div>
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
                        <a href="https://www.instagram.com/sattyamchauhan/?hl=en">
                            <img src={Instagram} alt="" />
                        </a>
                    </div>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact