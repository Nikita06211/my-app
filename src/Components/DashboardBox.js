import React from 'react';
import { styled } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import BarGraphIcon from '@mui/icons-material/BarChart';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import CalendarIcon from '@mui/icons-material/Event';

const BoxContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  maxHeight: '5.5rem',
  textAlign: 'center',
  cursor: 'pointer',
  marginTop:'5rem',
  marginLeft:'2.5rem',
  backgroundColor:'#374149',
  width: '14rem'
}));

const DashboardBox = () => {
  const boxesData = [
    { icon: <MoneyIcon style={{marginTop:'0.5rem', color:'#CDCDCD'}}/>, heading: 'Total Eco Pulse Credits', value: 123, percentage: '' },
    { icon: <BarGraphIcon style={{marginTop:'0.5rem', color:'#CDCDCD'}}/>, heading: 'January Carbon Footprint', value: '', percentage: '50%' },
    { icon: <ProfileIcon style={{marginTop:'0.5rem', color:'#CDCDCD'}}/>, heading: 'Total Credits Redeemed', value: 456, percentage: '' },
    { icon: <CalendarIcon style={{marginTop:'0.5rem', color:'#CDCDCD'}}/>, heading: 'Upcoming Challenges', value: '', percentage: 'Green Week Challenge' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px'}}>
      {boxesData.map((box, index) => (
        <BoxContainer key={index}>
          {box.icon}
          <Typography variant="subtitle2" gutterBottom style={{color:'#CDCDCD'}}>
            {box.heading}
          </Typography>
          <Typography variant="h6" style={{color:'#CDCDCD', fontWeight:'bold',fontSize:'1rem'}}>{box.value}</Typography>
          <Typography variant="caption" style={{color:'#CDCDCD', fontWeight:'bold', fontSize:'1rem'}}>{box.percentage}</Typography>
        </BoxContainer>
      ))}
    </div>
  );
};

export default DashboardBox;
