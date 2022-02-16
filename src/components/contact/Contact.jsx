import React, {useContext,useRef,useState} from 'react'
import './contact.css'
import phone from "../../img/phone.png"
import email from "../../img/email.jpg"
import address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'



const Contact = () => {
    const formRef=useRef();
    const [done,setDone]=useState(false)
    const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs
        .sendForm(
            'service_2jjsrg6',
             'template_0xoc9z6',
              formRef.current,
               'user_roLRXrilk4F0BLFniNCY9')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={phone}
                                alt=""
                                className="c-icon"
                             />
                             +91 9562032325
                        </div>
                        <div className="c-info-item">
                            <img
                                src={email}
                                alt=""
                                className="c-icon"
                             />
                             2anjanaramesh@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={address}
                                alt=""
                                className="c-icon"
                             />
                             Tortoyis Villa
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>what's your story?</b>
                        Get in touch always
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} placeholder="Message" name="message" rows="5"></textarea>
                    
                        <button>Submit</button>
                        {done && "Thank you.."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact