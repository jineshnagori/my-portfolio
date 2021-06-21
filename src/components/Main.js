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
                                        <span>Hello I'm</span>
                                    </div>

                                    <h2 className="" >Jinesh Nagori</h2>
                                    <h4 className="" >Web Developer |
                                        Content Creator</h4>

                                    <ul>
                                        <li className="" ><i
                                            className="fa fa-envelope"></i><a
                                                href="mailto:contact@jineshnagori.ml">contact@jineshnagori.ml</a></li>
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
                                        <img src="assets/images/hero.png" alt className="img-fluid" />
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