import React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

export const ProfileContent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '2rem', marginLeft: '16rem', marginRight: '2rem' }}>
      <Paper sx={{ width: '45%', padding: 2, textAlign: 'left', marginRight: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar sx={{ width: 100, height: 100 }}>N</Avatar>
        </div>
        <Typography variant="h6" align="center" mt={2}>
          John Doe
        </Typography>
        <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <Button sx={{marginTop:'1rem'}} variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </Paper>
      <div style={{ width: '65%' }}>
        <Paper sx={{ width: '60%', padding: 2, textAlign: 'left', marginBottom: '3rem', marginLeft:'2rem' }}>
          <Typography variant="h6">
            Your E-Plant Growth
          </Typography>
          <LinearProgress variant="determinate" value={50} />
        </Paper>
        <Paper sx={{ width: '60%', padding: 2, textAlign: 'left', marginBottom: '2rem', marginLeft:'2rem'  }}>
          <Typography variant="h6">
            Achievement
          </Typography>
          <Typography variant="subtitle1">
            Total Ecopulse Credits Earned:
          </Typography>
          <Typography variant="h4">
            100
          </Typography>
        </Paper>
      </div>
    </div>
  );
};
