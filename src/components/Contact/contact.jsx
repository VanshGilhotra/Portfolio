import React from "react";
import "./contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaFacebook, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

const Contact = () =>{

    const InstaRedirect = () =>{
        window.location.href = 'http://www.instagram.com/vanshgilhotra8';
    };

    return(
        <>
            <div className="section1">
                <h1>Contact Us</h1>
            </div>
            <hr />

            <div className="contact-card">
                <form action="" className="contact-us">
                    <input type="text" placeholder="Enter Your Name" id="name"/>
                    <br />

                    <input type="email" placeholder="Enter your Email" id="mail" />
                    <br />

                    <label htmlFor="message">Enter Your Request Here :</label><br />
                    <textarea placeholder="Enter Your Message" id="message-area"></textarea>
                    <br />
                    <button id="submit-btn">Submit</button>
                </form>
                                
                <div className="detailed">
                    <p><BsFillTelephoneFill/> +91-7901828660</p>
                    <p><MdMail/> vanshgilhotra00992@gmail.com</p>
                    <hr />
                    <ul>
                        <li><FaInstagramSquare id="insta-logo" onClick={InstaRedirect}/></li>
                        <li><FaFacebookF id="facebook-logo"/></li>
                        <li><FaSnapchat id="snapchat-logo"/></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Contact;