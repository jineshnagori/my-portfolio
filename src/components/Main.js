import React from 'react'

export default function Main() {
    return (
        <>
            <section className="home" id="home">
                <div className="home-ovimg">
                    <div className="container">
                        <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
                            <div className="col-sm-12 col-md-6">
                                <div className="header-info">
                                    <div className="promo">
                                        <span>Hello <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="20px"/>, I'm</span>
                                    </div>

                                    <h2 className="" >Jinesh Nagori</h2>
                                    <h4 className="" >Web Developer |
                                        Content Creator</h4>

                                    <ul>
                                        <li><i
                                            className="fa fa-envelope"><a
                                                href="mailto:contact@jineshnagori.me"> contact@jineshnagori.me</a></i></li>
                                    </ul>

                                    <ul className="social-icon">
                                        <li><a href="https://instagram.com/beta.programmer"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="https://github.com/jineshnagori"><i className="fa fa-github"></i></a></li>
                                        <li><a href="https://wa.me/918005929252"><i className="fa fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-img">
                                    <div className="img-border">
                                        <img src="assets/images/hero.png" className="img-fluid show" />
                                        <img src="assets/images/dhero.png" className="img-fluid hide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}