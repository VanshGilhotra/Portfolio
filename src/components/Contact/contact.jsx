import React, { useState } from "react";
import "./contact.css";
import { BsFillHouseExclamationFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

const Contact = () =>{
    const [reqStatus, setStatus] = useState(false);
    const [data,setData] = useState([]);

    const InstaRedirect = () =>{
        window.location.href = 'http://www.instagram.com/vanshgilhotra8';
    };
    const FacebookRedirect = () =>{
        window.location.href = 'https://www.facebook.com/profile.php?id=100070399093249';
    };
    const SnapRedirect = () =>{
        window.location.href = 'https://www.snapchat.com/add/vanshgilhotra9?share_id=ZER4sOsZh2I&locale=en-GB';
    };

    const SubmitReq = () =>{
        if(inputValues.name && inputValues.mail){
            const name = inputValues.name;
            const email = inputValues.mail;

            console.log(name , "    ", email);
            alert("Submit Successfull...");
        }
        alert("Submit Successfull...");
    };

    return(
        <>
            <div className="section1">
                <h1>Contact Us</h1>
            </div>
            <hr />

            <div className="contact-card">
                <form action="" className="contact-us">
                    <label htmlFor="name">Name :</label><br />
                    <input type="text" placeholder="Enter Your Name" name="name" id="name" required/>
                    <br />

                    <label htmlFor="email">Email :</label><br />
                    <input type="email" placeholder="Enter your Email" name="mail" id="mail" required/>
                    <br />

                    <label htmlFor="message">Enter Your Request Here :</label><br />
                    <textarea placeholder="Enter Your Message" id="message-area" required></textarea>
                    <br />
                    <button id="submit-btn" onClick={SubmitReq}>Submit</button>
                </form>
                                
                <div className="detailed">
                    <p><BsFillTelephoneFill/> +91-7901828660</p>
                    <p><MdMail/> vanshgilhotra00992@gmail.com</p>
                    <p><BsFillHouseExclamationFill/> Abohar,Punjab</p>
                    <hr />
                    <ul>
                        <li><FaInstagram id="insta-logo" onClick={InstaRedirect}/></li>
                        <li><FaFacebookF id="facebook-logo" onClick={FacebookRedirect}/></li>
                        <li><FaSnapchat id="snapchat-logo" onClick={SnapRedirect}/></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Contact;