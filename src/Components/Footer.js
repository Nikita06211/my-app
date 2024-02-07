import React from 'react';
import { Grid, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ backgroundColor: '#273643', color: '#fff', padding: '2rem 0' }}>
            <Grid item xs={12} md={6} style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '0' }}>
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Email: <Link href="mailto:contact@example.com" style={{ color: '#fff' }}>contact@example.com</Link>
                </Typography>
                <Typography variant="body1" paragraph>
                    Phone: <Link href="tel:+1234567890" style={{ color: '#fff' }}>+1 234 567 890</Link>
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Follow Us
                </Typography>
                <Typography variant="body1" paragraph>
                    <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '1rem' }}>
                        <Facebook />
                    </Link>
                    <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '1rem' }}>
                        <Twitter />
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '1rem' }}>
                        <LinkedIn />
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                        <Instagram />
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
