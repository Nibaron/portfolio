import React from 'react';
import developerPic from '../src/assets/programmer_v_02.jpg';
import linkedinIcon from '../src/assets/linkedin.png';
import githubIcon from '../src/assets/github.png';
import leetcodeIcon from '../src/assets/leetcode.png';

const Hero = () => {
    const openResume = () => {
        window.open('/src/assets/resume-example.pdf');
    };

    const goToContact = () => {
        window.location.href = './#contact';
    };

    const openLinkedIn = () => {
        window.location.href = 'https://linkedin.com/';
    };

    const openGitHub = () => {
        window.location.href = 'https://github.com/';
    };

    const openLeetcode = () => {
        window.location.href = 'https://github.com/';
    };

    return (
        <section id="profile" className="profile">
            <div className="section__pic-container">
                <img
                    src={developerPic}
                    alt="John Doe profile picture"
                />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Nibaron Kumar Das</h1>
                <p className="section__text__p2">Frontend Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={openResume}>
                        Download CV
                    </button>
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
