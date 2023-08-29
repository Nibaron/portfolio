import React from 'react';
import aboutPic from '../src/assets/pp.jpg';
import experiencePic from "./assets/experience.png";
import educationPic from "./assets/education.png";
import arrowPic from "./assets/arrow.png";

const About = () => {
    const gotoExperienceSection = () => {
        window.location.href = './#experience';
    };
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img
                        src={aboutPic}
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src={experiencePic}
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>
                                Fresher <br />
                                REACTJS Development
                            </p>
                        </div>
                        <div className="details-container">
                            <img
                                src={educationPic}
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>
                                B.Sc. Bachelors Degree
                                <br />
                                Rajshahi University of Engineering & Technology
                            </p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            Responsible and Ambitious Computer Science &
                            Engineering graduate of Rajshahi University of
                            Engineering and Technology (RUET). Passionate about
                            ReactJS development, with a keen interest in
                            building web applications that deliver seamless user
                            experiences. Self-motivated, fast learner and team
                            player aiming to boost efficiency by successfully
                            completing all projects well within their deadlines.
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={arrowPic}
                alt="Arrow icon"
                className="icon arrow"
                onclick={gotoExperienceSection}
            />
        </section>
    );
}
 
export default About;