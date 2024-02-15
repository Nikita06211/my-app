import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import { Timeline } from './Timeline';
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
        // Add more challenges as needed
    ];

    return (
        <>
        <Paper sx={{ width: '100%', padding: 2, margin: 'auto', marginLeft: '16rem', marginTop: '2rem', paddingBottom: '2rem' }}>
            <div style={{ display: 'inline'}}>
                <h1 style={{ textAlign: 'left', display: 'inline'}}>Challenges</h1>
                <p style={{ display: 'inline' }}> towards a greener future</p>
            </div>


            <br />
            <Grid container spacing={2}>
                {challenges.map((challenge, index) => (
                    <Grid item xs={6} key={index}>
                        <Paper sx={{ padding: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body2" color="textSecondary">{challenge.tags.join(', ')}</Typography>
                                <Typography variant="body2" color="secondary">{challenge.daysLeft} days left</Typography>
                            </Box>
                            <Typography variant="h6" mt={1}>{challenge.name}</Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>{challenge.description}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                                <Button variant="outlined" color="primary">View Details</Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Paper>
        </>
        
    );
};

export default ChallengesContent;
