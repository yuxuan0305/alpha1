import React from 'react';

const AboutDropdown = () => {

    const elementStyle = {
        color: "black",
    }

    const dropdownStyle = {
        width: 150,
        zIndex: 1000,
        top: '100%',
        left: 0,
        position: 'absolute' as 'absolute',
    }

    return (
        <div style={dropdownStyle} className="dropdown-menu">
            <ul>
                <li style={elementStyle}>Item 1</li>
                <li style={elementStyle}>Item 2</li>
                <li style={elementStyle}>Item 3</li>
            </ul>
        </div>
    );
};

export default AboutDropdown;
