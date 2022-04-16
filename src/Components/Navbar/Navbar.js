import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Sattyam</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                       <li>Home</li>
                       <li>Services</li>
                       <li>Experience</li>
                       <li>About</li>
                    </ul>
                </div>
                <a href="https://www.linkedin.com/in/sattyam-singh/">
                <button className='button n-button'>Contact Me</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;