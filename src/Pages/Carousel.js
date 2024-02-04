
import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const FeaturesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <Container maxWidth="lg" style={{ padding: '0', backgroundColor:'#273643', paddingBottom:'2rem'}}>
            <Typography variant="h2" gutterBottom align="center" style={{color:'#82A80B', marginBottom:'2rem', marginTop:'2rem',fontWeight:'bold'}} >
                Our Features
            </Typography>
            <Slider {...settings}>
                <div>
                    <img
                        src={process.env.PUBLIC_URL + '/Assets/feature1.jpg'}
                        alt="Feature 1"
                        style={{ width: '100%', height: '27rem'}}
                    />
                </div>
                <div>
                    <img
                        src={process.env.PUBLIC_URL + '/Assets/feature2.jpg'}
                        alt="Feature 2"
                        style={{ width: '100%', height: '27rem' }}
                    />
                </div>
                <div>
                    <img
                        src={process.env.PUBLIC_URL + '/Assets/feature3.jpg'}
                        alt="Feature 3"
                        style={{ width: '100%', height: '27rem' }}
                    />
                </div>
                <div>
                    <img
                        src={process.env.PUBLIC_URL + '/Assets/feature4.jpg'}
                        alt="Feature 3"
                        style={{ width: '100%', height: '27rem' }}
                    />
                </div>
                <div>
                    <img
                        src={process.env.PUBLIC_URL + '/Assets/feature5.jpg'}
                        alt="Feature 3"
                        style={{ width: '100%', height: '27rem' }}
                    />
                </div>
                {/* Add more images as needed */}
            </Slider>
        </Container>
    );
};