import React from 'react'

export default function Blogs() {
    return (
        <>
            <section className="blog" id="blog">
                <div className="container">
                    <div className="row section-separator p-inherit">
                        <div className="col-sm-12 section-title" >
                            <h3>Read My Blogs</h3>
                        </div>
                        <div className="col-sm-12 col-md-4 d-grid">
                            <div className="blog-item dark-bg">
                                <img src="assets/images/blogs/1.png" className="img-fluid" />
                                <div className="blog-inner">
                                    <h2><a className="blog-heading"
                                        href="https://jineshnagori.medium.com/how-to-google-syndrome-abee5df3b916">“How to
                                        Google” Syndrome. How to Overcome.</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-grid">
                            <div className="blog-item dark-bg">
                                <img src="assets/images/blogs/2.png" className="img-fluid" />
                                <div className="blog-inner">
                                    <h2><a
                                        href="https://jineshnagori.medium.com/executing-the-docker-command-without-sudo-one-command-only-2021-method-fec45ee01531">Executing
                                        the Docker Command Without Sudo</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-grid">
                            <div className="blog-item dark-bg">
                                <img src="assets/images/blogs/3.png" className="img-fluid" />
                                <div className="blog-inner">
                                    <h2><a className="blog-heading"
                                        href="https://jineshnagori.medium.com/only-one-command-to-install-docker-in-ubuntu-2021-latest-method-580224ae5b1a">Only
                                        one command to install Docker in Ubuntu</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}