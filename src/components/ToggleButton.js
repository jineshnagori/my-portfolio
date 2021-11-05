import React from 'react'

export default function ToggleButton() {
    return (
        <>
            <div id="toggleDarkMode" className="btn-toggle">
                <i className="fa fa-moon-o show"></i>
                <i className="fa fa-sun-o hide"></i>
            </div>
        </>
    )
}
