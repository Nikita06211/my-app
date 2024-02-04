import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
    const scrollToVision = () => {
        scroll.scrollTo('visionSection', {
            duration: 800,
            offset: -100,
            smooth: 'easeInOutQuart',
        });

    };


    let location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location]);

    if(location.pathname=='/dashboard'){
        return(
            ""
        );
    }

    return (
        <AppBar container style={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
            <Toolbar>
                {/* Logo on the left */}
                <img
                    src={process.env.PUBLIC_URL + '/Assets/logo.png'}
                    alt="Logo"
                    style={{ marginRight: '10px', height: '40px', width: 'auto' }}
                />

                {/* Navigation Links in the center */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{ color: 'black', marginLeft: '5rem' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black', margin: '0 1rem' }}>Home</Link>
                    <Link to="/about-us" style={{ textDecoration: 'none', color: 'black', margin: '0 1rem' }}>About Us</Link>
                    <ScrollLink
                        to="visionSection"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                        style={{ textDecoration: 'none', color: 'black', margin: '0 1rem', cursor: 'pointer' }}
                        onClick={scrollToVision}
                    >
                        Vision
                    </ScrollLink>
                    <Link to="/calculator" style={{ textDecoration: 'none', color: 'black', margin: '0 1rem' }}>Calculator</Link>
                </Typography>

                {/* Login and Signup Buttons on the right */}
                <Link to="/login">
                    <Button style={{ color: 'black', paddingLeft: '1.25rem', paddingRight: '1.25rem', border: 'solid black 0.1rem', borderRadius: '2rem', marginRight: '0.6rem' }}>Login</Button>
                </Link>
                <Link to="/signup">
                    <Button style={{ color: 'black', paddingLeft: '1.25rem', paddingRight: '1.25rem', border: 'solid black 0.1rem', borderRadius: '2rem' }}>Signup</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
