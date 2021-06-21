import React from 'react'

export default function About() {
    return (
        <>
           <section className="about" id="about">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 col-md-6">
                            <div className="about-img shadow-2" >
                                <img src="assets/images/ab-img.png" alt className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="about-inner">
                                <h2 className="">About Me</h2>
                                <p className="" >Hello, I’m a Jinesh
                                    Nagori,<br />
                                    I Am Pull-Stack Developer,<br />
                                    I just pull things off the Google and put it into my Code.</p>
                                <div className="about-tag">
                                    <ul>
                                        <li><span>HTML</span></li>
                                        <li><span>CSS</span></li>
                                        <li><span>Bootstrap</span></li>
                                        <li><span>Tailwind</span></li>
                                        <li><span>JavaScript</span></li>
                                        <li><span>React</span></li>
                                        <li><span>WordPress</span></li>
                                        <li><span>PHP</span></li>
                                        <li><span>MySQL</span></li>
                                    </ul>
                                </div>
                                <a className="btn btn-fill text-white" data-wow-duration="0.8s"
                                    data-wow-delay="0.4s">Downlaod CV <i className="fa fa-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}
