import React from 'react';
import checkPic from '../src/assets/checkmark.png';
import arrowPic from "./assets/arrow.png";


const Skill = () => {
    const gotoProject = () => {
        window.location.href = "./#projects";
    };
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Skill Set</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">
                            Programming language
                        </h2>
                        <div className="article-container">
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>C/C++</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>PHP</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Python</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Java</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>C#</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">
                            Frontend Development
                        </h2>
                        <div className="article-container">
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Tailwind CSS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>REACT</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Bootstrap</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkPic}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Material UI</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={arrowPic}
                alt="Arrow icon"
                className="icon arrow"
                onclick={gotoProject}
            />
        </section>
    );
};

export default Skill;
