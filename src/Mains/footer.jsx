import React from "react";
import { FaCopyright, FaFacebook, FaGithub, FaInstagram, FaSnapchat } from "react-icons/fa";
import "./footer.css";

const Footer = () =>{

    return(
        <>
            <footer className="footer">
                <div className="content">
                    <p id="textStyle"><FaCopyright/> {new Date().getFullYear()} Vansh Gilhotra .All Rights Reserved</p>
                    <div className="icons">
                        <a href="http://github.com/VanshGilhotra" target="_blank"       id="links"><FaGithub/></a>
                        <a href="http://Instagram.com/vanshgilhotra8" target="_blank"    id="links"><FaInstagram/></a>
                        <a href="https://www.snapchat.com/add/vanshgilhotra9?share_id=ZER4sOsZh2I&locale=en-GB" target="_blank"      id="links"><FaSnapchat/></a>
                        <a href="https://www.facebook.com/profile.php?id=100070399093249" target="_blank" id="links"><FaFacebook/></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;