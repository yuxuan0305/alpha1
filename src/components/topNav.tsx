import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TopNav() {

    let navigate = useNavigate();

    const appBarStyle = {
        backgroundColor: 'black',
        borderBottom: 'none',
    };

    const buttonStyle = {
        color: 'inherit',
        backgroundColor:'black',
        fontFamily: 'Courier New, Courier, monospace',
        padding: 25,
    };

    const hoverStyle = {
        color: 'lightgray',
        backgroundColor:'black',
        fontFamily: 'Courier New, Courier, monospace',
        padding: 25,
    };

    const centerToolbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);

    const homeStyle = isHomeHovered ? hoverStyle : buttonStyle;
    const projectsStyle = isProjectsHovered ? hoverStyle : buttonStyle;
    const ContactStyle = isContactHovered ? hoverStyle : buttonStyle;

    const handleHomeMouseMove = () => {
        setIsHomeHovered(!isHomeHovered);
    }

    const handleHomeClick = () => {
        setTimeout(()=> {navigate('/');}, 100);
    }

    const handleProjectsMouseMove = () => {
        setIsProjectsHovered(!isProjectsHovered);
    }

    const handleProjectsClick = () => {
        navigate('/projects');}

    const handleContactMouseMove = () => {
        setIsContactHovered(!isContactHovered);
    }

    const handleContactClick = () => {navigate('/contact');}
    

    return (
      <AppBar position='static' style={appBarStyle}>
        <Toolbar style={centerToolbarStyle}>
            <Button 
                style={homeStyle}
                onMouseEnter={handleHomeMouseMove}
                onMouseLeave={handleHomeMouseMove}
                onClick={handleHomeClick}
            >
                Home
            </Button>
            <Button 
                style={projectsStyle}
                onMouseEnter={handleProjectsMouseMove}
                onMouseLeave={handleProjectsMouseMove}
                onClick={handleProjectsClick}
            >
                Projects
            </Button>
            <Button
                style={ContactStyle}
                onMouseEnter={handleContactMouseMove}
                onMouseLeave={handleContactMouseMove}
                onClick={handleContactClick}
            >
                Contact
            </Button>
        </Toolbar>
      </AppBar>
    );
}

export default TopNav;
