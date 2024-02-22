import React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NotificationIcon from '@mui/icons-material/Notifications';

export const Timeline = () => {
  const challenges = [
    { id: 1, name: 'Reduce Plastic Usage', description: 'Reduce plastic usage in daily life.' },
    { id: 2, name: 'Plant Trees', description: 'Plant trees to combat climate change.' },
    { id: 3, name: 'Save Water', description: 'Conserve water resources by reducing usage.' },
  ];

  const contributors = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  return (
    <Paper sx={{ width: '25%', padding: 2, textAlign: 'left', position: 'fixed', right: 0, margin: '2rem', marginTop:'2rem', paddingBottom:'2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <Typography variant="h6" align="left">Timeline</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NotificationIcon />
          <Avatar sx={{ marginLeft: '1rem' }}>N</Avatar>
        </div>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Typography variant="h6" align="left">Trending Challenges</Typography>
        <Button variant="text" size="small" sx={{ float: 'right' }}>View All</Button>
      </div>
      <Grid container spacing={2}>
        {challenges.map((challenge) => (
          <Grid item xs={12} key={challenge.id}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">{challenge.name}</Typography>
              <Typography variant="body2">{challenge.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Typography variant="h6" align="left">Top Contributors</Typography>
      </div>
      <Grid container spacing={2}>
        {contributors.map((contributor) => (
          <Grid item xs={12} key={contributor.id}>
            <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar>N</Avatar>
              <Typography variant="body2" sx={{ marginLeft: '1rem', flexGrow: 1 }}>{contributor.name}</Typography>
              <Button variant="text" size="small">Follow</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};