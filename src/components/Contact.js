import React from 'react'

export default function Contact() {
    let style = {border: "0"};
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 section-title" >
                            <h3>Contact Me</h3>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <form id="contactForm" className="single-form quate-form" data-toggle="validator" action="https://formspree.io/f/moqywzeq"
  method="POST">
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <input name="name" className="contact-name form-control" id="F_name" type="text"
                                            placeholder="First Name" required />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <input name="name" className="contact-email form-control" id="L_name" type="text"
                                            placeholder="Last Name" required />
                                    </div>
                                    <div className="col-sm-12">
                                        <input name="_replyto" className="contact-subject form-control" id="email" type="email"
                                            placeholder="Your Email" required />
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea className="contact-message" id="message" name="message" rows="6" placeholder="Your Message"
                                            required></textarea>
                                    </div>
                                    <div className="btn-form col-sm-12">
                                        <button type="submit" className="btn btn-fill btn-block" id="form-submit">Send
                                            Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}