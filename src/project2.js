import React from "react";
import arrowPic from "./assets/arrow.png";
import p4Pic from "./assets/project-4.png";
import p5Pic from "./assets/project-5.png";
import p6Pic from "./assets/project-6.png";


const Projects2 = () => {
    const gotoContactPage = () => {
        window.location.href = "./#contact";
    };

    const handleClick = (Link) => {
        window.open(Link);
    };
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects(4-6)</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p4Pic}
                                alt="Project 4"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            REACT IMDB Table
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/IMDB_TOP_Movie_Table')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={ () => handleClick('https://imdb-nibz.netlify.app/') }
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p5Pic}
                                alt="DX ball Game"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            REACT ToDo List
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/todo_list')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://todo-nibz.netlify.app/')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p6Pic}
                                alt="Project 6"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            Personal Portfolio
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/portfolio')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://niaron-nibz.netlify.app/')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={arrowPic}
                alt="Arrow icon"
                className="icon arrow"
                onClick={gotoContactPage}
            />
        </section>
    );
};

export default Projects2;
