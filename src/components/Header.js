import React from 'react'


export default function Header() {
    return (
        <>
            <header className="black-bg header fixed-nav nav-scroll xs-mobile-nav wow fadeInUp" id="header">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg nav nav-btn">
                            <a className="navbar-brand" href="#">
                                <img src="assets/images/logo.png" className="img-fluid" />
                            </a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-0 ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#service">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#skills">Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#projects">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#testimonial">Testimonials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#blog">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}