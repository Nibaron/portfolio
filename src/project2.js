import React from "react";
import arrowPic from "./assets/arrow.png";
import p4Pic from "./assets/project-4.png";
import p5Pic from "./assets/p5PIC.png";
import p6Pic from "./assets/project-b.png";


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
            <h1 className="title">REACT Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p6Pic}
                                alt="code book"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            CodeBook E-Commerce
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/book-bazar-ecommerce')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://book-bazar-ecommerce.vercel.app/')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>

                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p5Pic}
                                alt="Project 6"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            Movie Magnet Web Page
                        </h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://github.com/Nibaron/movie_magnet_react')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={()=>handleClick('https://movie-magnet-react.vercel.app/')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>

                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={p4Pic}
                                alt="Project 4"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">
                            IMDB Movie Table
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
