import React from 'react'

export default function BottomNav() {
    return (
        <>
            <div className="bottom-nav">
                <div className="bottom-nav-items">
                    <a className="bottom-nav-item" href="#projects"><i className="fa fa-tasks"></i><span>Projects</span></a>
                    <a className="bottom-nav-item" href="#about"><i className="fa fa-user"></i><span>About</span></a>
                    <div id="toggleMode">
                        <i id="toggleIcon" className="moon fa fa-moon-o show"></i>
                        <i id="toggleIcon" className="sun fa fa-sun-o hide"></i>
                    </div>
                    <a className="bottom-nav-item" href="#blog"><i className="fa fa-book"></i><span>Blogs</span></a>
                    <a className="bottom-nav-item" href="#contact"><i className="fa fa-phone"></i><span>Contact</span></a>
                </div>
            </div>
        </>
    )
}
