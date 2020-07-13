import React from 'react';
import "../styles/contact.css";


export default function Contact() {
    return (
        <div className="container">
            <main>
                <section className="row">
                    <div className="col-md-8">
                        <article className="block">
                            <h1 className="block-header">Contact Me</h1>
                            <p className="non-header">Thank you for checking out my portfolio! Please feel free to follow my LinkedIn and reach out to me via either my email or on LinkedIn which those are posted below!</p>
                            <h2>Please Click a link below</h2>
                            <ul className="non-header">
                                <a href="mailto:brandonchontos@gmail.com"><li>brandonchontos@gmail.com</li></a>
                                <a href="https://github.com/bchontos"><li>Github Profile - bchontos</li></a>
                                <a href="https://www.linkedin.com/in/brandon-chontos-18a1501b0/"><li>LinkedIn - brandon-chontos-web-developer</li></a>
                            </ul>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}
