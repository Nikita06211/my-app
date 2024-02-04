import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { FeaturesCarousel } from './Carousel';
import { Avatar } from '@mui/material';

export const Home = () => {
    return (
        <Container maxWidth="lg" style={{ padding: '0', margin: '0' }}>
            <Grid container spacing={0} style={{ margin: '0', padding: '0' }}>
                {/* Image Section */}
                <Grid item xs={12}>
                    <img
                        src={process.env.PUBLIC_URL + '/Assets/home_image.jpg'}
                        alt="Home Image"
                        style={{ width: '100%', height: 'auto', padding: '0', margin: '0' }}
                    />
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} container spacing={3} style={{ marginBottom: '2rem' }}>
                    {/* Centered Heading */}
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom align="center" style={{ color: '#82A80B', fontFamily: 'poppins', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>
                            Carbon Footprint
                        </Typography>
                    </Grid>

                    {/* Left Half - Text Definition */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" align="left" paragraph style={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Condensed', fontWeight: '300', marginLeft: '2rem', marginTop: '3rem' }}>
                            A carbon footprint is the measure of how much an individual, organization, or activity contributes
                            to climate change by producing greenhouse gases, particularly carbon dioxide. It helps gauge the
                            environmental impact of various actions and choices.
                        </Typography>
                    </Grid>

                    {/* Right Half - Image */}
                    <Grid item xs={12} md={6} style={{ backgroundColor: 'white', textAlign: 'right' }}>
                        <img
                            src={process.env.PUBLIC_URL + '/Assets/footprint.png'}
                            alt="Footprint Image"
                            style={{ width: '50%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={3}>
                    <FeaturesCarousel />
                </Grid>

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
            </Grid>
        </Container>
    );
};
