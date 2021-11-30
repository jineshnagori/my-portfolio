import React from 'react'

export default function ToggleButton() {
    return (
        <>
            <div id="toggleDarkMode">
                <div className="toggle_wrap">
                    <i className="moon fa fa-moon-o show"></i>
                    <i className="sun fa fa-sun-o hide"></i>
                </div>
            </div>
        </>
    )
}
