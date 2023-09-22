import React from "react";
import p1Pic from "./assets/project-1.jpg";
import p2Pic from "./assets/Game.gif";
import p3Pic from "./assets/project-3.png";


const Projects1 = () => {

    const handleClick = (Link) => {
        window.open(Link);
    };
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">RUET Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p1Pic}
                                alt="Project 1"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            RUET Club Management
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/RUET-CLUB-MANAGEMENT')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={ () => handleClick('https://github.com/Nibaron/RUET-CLUB-MANAGEMENT') }
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p2Pic}
                                alt="DX ball Game"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            DX ball Game
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/Graphics-Lab')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/Graphics-Lab')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p3Pic}
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            Class Routine App
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/Myclassrountineapp')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/Myclassrountineapp')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects1;
