import React from 'react'

export default function ToggleButton() {
    return (
        <>
            <div id="toggleDarkMode" className="btn-toggle">
                <button className="toggle_wrap">
                    <i className="fa text-white fa-moon-o show"></i>
                    <i className="fa fa-sun-o hide"></i>
                </button>
            </div>
        </>
    )
}
