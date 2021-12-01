import React from 'react'

export default function ToggleButton() {
    return (
        <>
            <div id="toggleDarkMode">
                <i id="toggleIcon" className="moon fa fa-moon-o show"></i>
                <i id="toggleIcon" className="sun fa fa-sun-o hide"></i>
            </div>
        </>
    )
}
