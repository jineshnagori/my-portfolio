import React from 'react'

export default function Services() {
    return (
        <>
            <section className="service" id="service">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 text-center section-title">
                            <h2>What I do</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="service-item shadow-1 dark-bg">
                                <i className="fa fa-bullseye purple-color"></i>
                                <h3>Content Creation</h3>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="service-item shadow-1 dark-bg">
                                <i className="fa fa-code iron-color"></i>
                                <h3>Web Development</h3>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="service-item shadow-1 dark-bg">
                                <i className="fa fa-object-ungroup sky-color"></i>
                                <h3>DevOps</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}