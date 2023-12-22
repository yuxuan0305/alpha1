import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function TopNav() {

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

    const centerToolbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
      <AppBar position='static' style={appBarStyle}>
        <Toolbar style={centerToolbarStyle}>
            <Button style={buttonStyle}>
                Home
            </Button>
            <Button style={buttonStyle}>
                Projects
            </Button>
            <Button style={buttonStyle}>
                Experience
            </Button>
        </Toolbar>
      </AppBar>
    );
}

export default TopNav;
