import React from 'react'

export default function Skills() {
    let style1 = {width: "90%"};
    let style2 = {width: "70%"};
    let style3= {width: "70%"};
    let style4 = {width: "60%"};
    let style5 = {width: "50%"};
    let style6 = {width: "50%"};
    let style7 = {width: "60%"};

    return (
        <>
            <section className="skills" id="skills">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
                            <div className="skills-inner">
                                <div className="justify-content-center professional-skill">
                                    <h3>Technical Skills</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="skills-inner">
                                <div className="professional-skill">
                                    <div className="each-skills">
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="nome">HTML</div>
                                                    <div className="percentagem-num">90%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={style1}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="nome">CSS</div>
                                                    <div className="percentagem-num">70%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={style2}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="nome">Bootstrap</div>
                                                    <div className="percentagem-num">70%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={style3}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="nome">JavaScript</div>
                                                    <div className="percentagem-num">60%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={style4}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="nome">React</div>
                                                    <div className="percentagem-num">50%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={style5}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="nome">PHP</div>
                                                    <div className="percentagem-num">50%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={style6}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="nome">MySQL</div>
                                                    <div className="percentagem-num">60%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={style7}></div>
                                                </div>
                                            </div>
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