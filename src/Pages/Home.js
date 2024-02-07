import React from 'react';
import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FeaturesCarousel } from './Carousel';
import { Avatar } from '@mui/material';
import Footer from '../Components/Footer';

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="xl" style={{ padding: '0', margin: '0' }}>
            <Grid container spacing={2} style={{ margin: '0', padding: '0' }}>
                {/* Image Section */}
                <Grid item xs={12}>
                    <img
                        src={process.env.PUBLIC_URL + '/Assets/home_image.jpg'}
                        alt="Home Image"
                        style={{ width: '100%', height: 'auto', padding: '0', margin: '0' }}
                    />
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} container spacing={isMobile ? 2 : 3} style={{ marginBottom: '2rem' }}>
                    {/* Centered Heading */}
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom align="center" style={{ color: '#82A80B', fontFamily: 'poppins', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>
                            Carbon Footprint
                        </Typography>
                    </Grid>

                    {/* Left Half - Text Definition */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" align={isMobile ? 'center' : 'left'} paragraph style={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Condensed', fontWeight: '300', marginLeft: isMobile ? '0' : '2rem', marginTop: isMobile ? '1rem' : '3rem' }}>
                            A carbon footprint is the measure of how much an individual, organization, or activity contributes
                            to climate change by producing greenhouse gases, particularly carbon dioxide. It helps gauge the
                            environmental impact of various actions and choices.
                        </Typography>
                    </Grid>

                    {/* Right Half - Image */}
                    <Grid item xs={12} md={6} style={{ backgroundColor: 'white', textAlign: isMobile ? 'center' : 'right' }}>
                        <img
                            src={process.env.PUBLIC_URL + '/Assets/footprint.png'}
                            alt="Footprint Image"
                            style={{ width: isMobile ? '70%' : '50%', height: 'auto', margin: isMobile ? '1rem auto' : '0' }}
                        />
                    </Grid>
                </Grid>

                {/* Features Carousel */}
                <Grid item xs={12} container spacing={3}>
                    <FeaturesCarousel />
                </Grid>

                {/* Our Vision Section */}
                <Grid item xs={12} container spacing={3} style={{ marginBottom: '2rem' }}  id="visionSection">
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom align="center" style={{ color: '#82A80B', fontFamily: 'poppins', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>
                            Our Vision
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ backgroundColor: 'white', textAlign: 'left' }}>
                        <img
                            src={process.env.PUBLIC_URL + '/Assets/planet.jpg'}
                            alt="Footprint Image"
                            style={{ width: '50%', height: 'auto', marginLeft: '2rem' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} align="right" >
                        <Typography variant="h5" align="left" paragraph style={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Condensed', fontWeight: '300', marginRight: '1rem', marginLeft: '2rem', marginTop: '2rem' }}>
                            <Avatar style={{ marginRight: '1rem', backgroundColor: '#3D565B' }}>1</Avatar>
                            Understanding your carbon footprint helps you take steps to reduce your impact on climate change.
                        </Typography>
                        <Typography variant="h5" align="left" paragraph style={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Condensed', fontWeight: '300', marginRight: '1rem', marginLeft: '2rem', marginTop: '2rem' }}>
                            <Avatar style={{ marginRight: '1rem', backgroundColor: '#3D565B' }}>2</Avatar>
                            Empower yourself to offset your carbon footprint and embrace a greener, more sustainable lifestyle.
                        </Typography>
                        <Typography variant="h5" align="left" paragraph style={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Condensed', fontWeight: '300', marginRight: '1rem', marginLeft: '2rem', marginTop: '2rem' }}>
                            <Avatar style={{ marginRight: '1rem', backgroundColor: '#3D565B' }}>3</Avatar>
                            Eco-Pulse Carbon Credit Award enhances sustainability and promoting a greener world.
                        </Typography>
                    </Grid>
                </Grid>

                {/* How We Work Section */}
                <Grid item xs={12} container spacing={3} style={{ marginBottom: '0', backgroundColor: '#273643' }}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom align="center" style={{ color: '#82A80B', fontFamily: 'poppins', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>
                            How We Work
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={process.env.PUBLIC_URL + '/Assets/roadmap.png'}
                            alt="Home Image"
                            style={{ width: '100%', height: 'auto', padding: '0', margin: '0' }}
                        />
                    </Grid>
                </Grid>

                {/* Footer Component */}
                <Footer />
            </Grid>
        </Container>
    );
};

export { Home };
