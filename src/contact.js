import React from "react";
import emailPic from "./assets/email.png";
import linkedinIcon from '../src/assets/linkedin.png';
import facebookIcon from "./assets/facebook.png";
 
const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src={emailPic}
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                    />
                    <p>
                        <a href="mailto:nibaronkumar02@gmail.com">
                            nibaronkumar02@gmail.com
                        </a>
                    </p>
                </div>
                <div className="contact-info-container">
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p>
                        <a href="https://www.linkedin.com/in/nibaron-ruet/">LinkedIn</a>
                    </p>
                </div>
                <div className="contact-info-container">
                    <img
                        src={facebookIcon}
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p>
                        <a href="https://www.facebook.com/nibaron.kumar2">Facebook</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
