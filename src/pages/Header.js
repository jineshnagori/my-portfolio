import React from "react";

function Header() {
    return (
        <>
            <div class="header">
                <div class="header-wrapper">
                    <a class="logo" href="/">
                        <div>JineshNagori<strong>.</strong></div>
                    </a>
                    <div class="menu">
                        <div class="menuItem">
                            <a href="#projects">Projects</a>
                        </div>
                        <div class="menuItem">
                            <a href="#contact">Contact</a>
                        </div>
                        <div class="menuItem">
                            <div id="toggleMode">
                                <i id="toggleIcon" className="moon ri-moon-fill show"></i>
                                <i id="toggleIcon" className="sun ri-sun-fill hide"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
