import React from 'react'

export default function Testimonials() {
    let image = { width: "100px", height: "100px" };
    return (
        <>
            <section className="testimonial" id="testimonial">
                <div className="testo container">
                    <div className="row">
                        <div className="section-title col-sm-12">
                            <h3>Testimonials</h3>
                        </div>
                        <div className="c-card col-md-4">
                            <div className="card d-flex mx-auto">
                                <div className="card-image"> <img className="clients img-fluid d-flex mx-auto" src="assets/images/c1.jpg" /> </div>
                                <div className="card-text">
                                    Jinesh has a very wide and in-depth knowledge in Web Development, and is quite orthodox with web developing. The work ethic what he possess is quite impeccable and working with him will always give you a plus point and a push ahead of success. Jinesh is a gifted skilled web developer with a rare combination of patience, logic and research skills.
                                </div>
                                <div className="card-footer"> <span id="name">Charlie : The Hacker<br /></span> <span id="position">CEO of <a href="https://xccuratesecurity.in">Xccurate Security</a></span> </div>
                            </div>
                        </div>
                        <div className="c-card col-md-4">
                            <div className="card d-flex mx-auto">
                                <div className="card-image"> <img className="clients img-fluid d-flex mx-auto" src="assets/images/c2.png" /> </div>
                                <div className="card-text">
                                    Fantastic job with the website. Extremely user friendly UI with fast loading and great animations. Very fast and top notch service, would highly recommend to anyone who needs a website.
                                </div>
                                <div className="card-footer"> <span id="name">Tarun KS<br /></span> <span id="position">CEO of <a href="http://taruncode.ml/">Load The Code</a></span> </div>
                            </div>
                        </div>
                        <div className="c-card col-md-4">
                            <div className="card d-flex mx-auto ">
                                <div className="card-image"> <img className="clients img-fluid d-flex mx-auto" src="assets/images/c3.gif" /> </div>
                                <div className="card-text">
                                    Always available, extremely knowledgeable, and a tremendous "can-do" attitude. Our website was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. Jinesh's guidance and advice was invaluable in producing that app which easily exceeded my expectations... the entire company was thrilled with it! Without any hesitation... highly recommended.
                                    <br />Thank you Jinesh
                                </div>
                                <div className="card-footer"> <span id="name">Mukul Saini<br /></span> <span id="position">Co-Founder of <a href="http://theleapcompany.in/">The Leap Company</a></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}