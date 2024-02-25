import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import './challenge-content.css'; // Import external CSS file

export const ChallengesContent = () => {
    // Dummy data for challenges
    const challenges = [
        {
            tags: ['Tag1', 'Tag2'],
            daysLeft: 7,
            name: 'Challenge 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            tags: ['Tag3', 'Tag4'],
            daysLeft: 10,
            name: 'Challenge 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            tags: ['Tag3', 'Tag4'],
            daysLeft: 10,
            name: 'Challenge 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            tags: ['Tag3', 'Tag4'],
            daysLeft: 10,
            name: 'Challenge 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            tags: ['Tag3', 'Tag4'],
            daysLeft: 10,
            name: 'Challenge 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            tags: ['Tag3', 'Tag4'],
            daysLeft: 10,
            name: 'Challenge 6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    ];

    return (
        <Paper className="paper-container">
            <div className="header">
                <h1>Challenges</h1>
                <p> towards a greener future</p>
            </div>
            <br />
            <Grid container spacing={2} className="grid-container">
                {challenges.map((challenge, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} className="grid-item">
                        <Paper className="paper-container">
                            <Box className="challenge-details">
                                <Typography variant="body2" color="textSecondary">{challenge.tags.join(', ')}</Typography>
                                <Typography variant="body2" color="secondary">{challenge.daysLeft} days left</Typography>
                            </Box>
                            <Typography variant="h6" className="challenge-name">{challenge.name}</Typography>
                            <Typography variant="body2" color="textSecondary" className="challenge-description">{challenge.description}</Typography>
                            <Box className="challenge-actions">
                                <Button variant="outlined" color="primary">View Details</Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ChallengesContent;