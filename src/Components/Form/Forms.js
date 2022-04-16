import React,{useRef, useState} from 'react'
import './Forms.css'
import emailjs from '@emailjs/browser';

const Forms = () => {
    // Here we use useState Hook for showing the done message in forms 
    const[done,setDone]= useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Here we mainly need to change the service id , temp id according to your EmailJS account
    emailjs.sendForm('service_dwcvmvv', 'template_aicnn7p', form.current,
    'AGdnosvWUVfErZIDM')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <div className='contact-form'>
            <div className="w-left">
                <div className="awesome">
                    <span>Contact Me</span>
                    <span>On Email</span>
                    <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
                </div>
            </div>
            <div className="c-right">
                {/* Here for the form i am using the JS library EmailJs, that will work like it will send email to the provided mail */}
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for Contacting me😊"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Forms