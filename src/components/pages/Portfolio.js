import React from 'react';
import "../styles/portfolio.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";


export default function Portfolio() {
    const photoFiller = "https://via.placeholder.com/350x350";
    return (
        <div className="container">
            <main className="row pos">
                <div className="col-md-8">
                    <article className="block">
                        <h1 className="block-header">My Portfolio</h1>
                        <hr />
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://github.com/bchontos/Project1" data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid port-image" src={project1} alt="My day planner app"></img></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://github.com/bchontos/Project2" data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid port-image" src={project2} alt="My day planner app"></img></a>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}
