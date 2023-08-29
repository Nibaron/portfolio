import React from 'react';
import developerPic from '../src/assets/programmer_v_02.jpg';
import linkedinIcon from '../src/assets/linkedin.png';
import githubIcon from '../src/assets/github.png';
import leetcodeIcon from '../src/assets/leetcode.png';
import resumePdf from '../src/assets/NIBARON-RUET.pdf';

const Hero = () => {

    const goToContact = () => {
        window.location.href = './#contact';
    };

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/nibaron-ruet/');
    };

    const openGitHub = () => {
        window.open('https://github.com/Nibaron');
    };

    const openLeetcode = () => {
        window.open('https://leetcode.com/Nibaron_RUET/');
    };

    return (
        <section id="profile" className="profile">
            <div className="section__pic-container">
                <img
                    src={developerPic}
                    alt="profile picture"
                />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">  Nibaron Kumar Das</h1>
                <p className="section__text__p2">Frontend Developer</p>
                <div className="btn-container">
                <a
                        href={resumePdf}
                        className="btn btn-color-2"
                        download="Nibaron_Kumar_Das_Resume.pdf"
                    >
                        Download CV
                    </a>
                    <button className="btn btn-color-1" onClick={goToContact}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src={linkedinIcon}
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={openLinkedIn}
                    />
                    <img
                        src={githubIcon}
                        alt="My Github profile"
                        className="icon"
                        onClick={openGitHub}
                    />
                    <img
                        src={leetcodeIcon}
                        alt="My leetcode profile"
                        className="icon"
                        onClick={openLeetcode}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
