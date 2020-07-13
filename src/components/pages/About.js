import React from 'react';
import "../styles/about.css";
import brandon from "../images/profile.png";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";


export default function About() {
    return (
        <div className="container cards">

            <main>
                <section className="row">
                    <div className="col-md-8">
                        <article className="block">
                            <h1 className="block-header logo">About Me</h1>
                            <img src={brandon}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Filler Photo Until I have a more professional one available"
                                alt="A Sean Connery Shelf Meme"
                                className="me-photo" />

                            <p className="non-header">Hello, I'm Brandon Chontos a full stack web developer that just completed
                            Case Western's coding bootcamp. I am transition into a new carrerfield and looking forward to learn and grow with your company. A few of my hobbies include, playing videogames, working on computers, riding motorcycles and learning new things.
                                </p>
                        </article>
                    </div>
                </section>
            </main>

            <main className="container cards card-holder">
                <section className="row card-holder">
                    <div className="col-sm-6 col-md-6 col-lg-5">
                        <div className="card card-holder" style={{ width: "18rem" }}>
                            <img src={github} className="card-img-top" alt="Github Logo" />
                            <div className="card-body">
                                <h5 className="card-title">My Github</h5>
                                <p className="card-title">View my Github.</p>
                                <a href="https://github.com/bchontos" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-5">
                        <div className="card card-holder" style={{ width: "18rem" }}>
                            <img src={linkedIn} className="card-img-top" alt="Github Logo" />
                            <div className="card-body">
                                <h5 className="card-title">My LinkedIn Profile</h5>
                                <p className="card-title">View my LinkedIn.</p>
                                <a href="https://www.linkedin.com/in/brandon-chontos-18a1501b0/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
