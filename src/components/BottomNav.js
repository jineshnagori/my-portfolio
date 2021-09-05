import React from 'react'

export default function BottomNav() {
    return (
        <>
            <div className="bottom-nav fixed-bottom-nav">
                <div><a href="#projects"><i className="fa fa-tasks"></i><span>Projects</span></a></div>
                <div><a href="#about"><i className="fa fa-user"></i><span>About</span></a></div>
                <div><a href="#"><i className="fa fa-home"></i><span>Home</span></a></div>
                <div><a href="#blog"><i className="fa fa-book"></i><span>Blogs</span></a></div>
                <div><a href="#contact"><i className="fa fa-phone"></i></a><span>Contact</span></div>
            </div>
        </>
    )
}
