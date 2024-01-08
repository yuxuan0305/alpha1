import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import AboutDropdown from './AboutDropdown';

function TopNav() {

    let navigate = useNavigate();

    const logoStyle = {
        height: 82,
        width: 71,
    }

    const appBarStyle = {
        marginTop: 24,
        borderBottom: 'none',
        border: 0,
        display: "flex",
        backgroundColor: "white",
    };

    const buttonStyle = {
        color: 'rgb(53, 71, 43)',
        padding: 25,
        backgroundColor: "white",
        fontSize: 20,
        textTransform: 'none' as 'none',
    };

    const hoverStyle = {
        padding: 25,
        backgroundColor: "white",
        color: "rgb(0, 158, 164)",
        textDecoration: "underline",
        textUnderlineOffset: 5,
        fontSize: 20,
        textTransform: 'none' as 'none',
    };

    const centerToolbarStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    const [isCareersHovered, setIsCareersHovered] = useState(false);
    const [isLanguageHovered, setIsLanguageHovered] = useState(false);

    const homeStyle = isHomeHovered ? hoverStyle : buttonStyle;
    const projectsStyle = isProjectsHovered ? hoverStyle : buttonStyle;
    const ContactStyle = isContactHovered ? hoverStyle : buttonStyle;
    const careerStyle = isCareersHovered ? hoverStyle : buttonStyle

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

    const handleCareerMouseMove = () => {
        setIsCareersHovered(!isCareersHovered);
    }

    const handleContactClick = () => {navigate('/contact');}

    const handleCareerClick = () => {navigate("/career");}

    const iconContainerStyle = {
        display: "flex",
        justifyContent: "flex-end",
    }

    const languageIconStyle = {
        color:"black",
        marginRight: 8,
    }

    const languageIconHoverStyle = {
        color: "rgb(0, 158, 164)",
        marginRight: 8,
        alignItems: 'right',
    }

    const handleLanguageMouseMove = () => {
        setIsLanguageHovered(!isLanguageHovered);
    }

    const languageStyle = isLanguageHovered ? languageIconHoverStyle : languageIconStyle;
    

    return (
      <AppBar position='static' style={appBarStyle} elevation={0}>
        <Toolbar style={{...centerToolbarStyle, textTransform: 'none' }}>
            <img src={logo} style={logoStyle}/>
            <div style={{ position: 'relative' }}>
                <Button 
                    style={homeStyle}
                    onMouseEnter={handleHomeMouseMove}
                    onMouseLeave={handleHomeMouseMove}
                    onClick={handleHomeClick}
                    disableTouchRipple
                >
                    Company
                </Button>
                {isHomeHovered && <AboutDropdown/>}
            </div>
            <div style={{ position: 'relative' }}>
                <Button 
                    style={projectsStyle}
                    onMouseEnter={handleProjectsMouseMove}
                    onMouseLeave={handleProjectsMouseMove}
                    onClick={handleProjectsClick}
                    disableTouchRipple
                >
                    Product
                </Button>
                {isProjectsHovered && <AboutDropdown/>}
            </div>
            <div style={{ position: 'relative' }}>
                <Button
                    style={careerStyle}
                    onMouseEnter={handleCareerMouseMove}
                    onMouseLeave={handleCareerMouseMove}
                    onClick={handleCareerClick}
                    disableTouchRipple
                >
                    Careers
                </Button>
                {isCareersHovered && <AboutDropdown/>}
            </div>
            <div style={{ position: 'relative' }}>
                <Button
                    style={ContactStyle}
                    onMouseEnter={handleContactMouseMove}
                    onMouseLeave={handleContactMouseMove}
                    onClick={handleContactClick}
                    disableTouchRipple
                >
                    Contact
                </Button>
                {isContactHovered && <AboutDropdown/>}
            </div>
            <div style={iconContainerStyle}>
                <LanguageIcon
                    style={languageStyle}
                    onMouseEnter={handleLanguageMouseMove}
                    onMouseLeave={handleLanguageMouseMove}/>
            </div>
        </Toolbar>
      </AppBar>
    );
}

export default TopNav;
