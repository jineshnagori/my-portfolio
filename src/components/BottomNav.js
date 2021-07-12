import React from 'react'

export default function BottomNav() {
    return (
        <>
            <div className="bottom-nav fixed-bottom-nav">
                <ul>
                    <li className="mr"><a href="#projects"><i className="fa fa-tasks"></i><span>Projects</span></a></li>
                    <li className="mr"><a href="#about"><i className="fa fa-user"></i><span>About</span></a></li>
                    <li><a href="#"><i className="fa fa-home"></i><span>Home</span></a></li>
                    <li className="ml"><a href="#blog"><i className="fa fa-book"></i><span>Blogs</span></a></li>
                    <li className="ml"><a href="#contact"><i className="fa fa-phone"></i></a><span>Contact</span></li>
                </ul>
            </div>
        </>
    )
}
