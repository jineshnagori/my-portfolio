import React from 'react'

export default function Contact() {
    let style = { border: "0" };
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-separator">
                        <div className="section-title" >
                            <h3>Contact Me</h3>
                        </div>
                        <div className="auth">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-10">
                                        <div className="contact-form">
                                            <form action="https://formspree.io/f/xnqlqawe" method="POST" className="form-group mb-0">
                                                <input name="fname" className="contact-name form-control" type="text"
                                                placeholder="First Name" required />
                                                <input name="lname" className="contact-email form-control" type="text"
                                                placeholder="Last Name" required />
                                                <input name="_replyto" className="contact-subject form-control" type="email"
                                                placeholder="Your Email" required />
                                                <textarea className="contact-message form-control" name="message" rows="6" placeholder="Your Message"
                                                required></textarea>
                                                <button className="bigbtn" type="submit">Send Message</button>
                                            </form>
                                        </div>
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