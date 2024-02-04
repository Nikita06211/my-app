import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, CssBaseline, Container } from '@mui/material';
import { styled } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import { MiniDrawer } from '../Components/SideNav';
import DashboardBox from '../Components/DashboardBox';
// import {DonutChart} from '../Components/Stats1';
// import {ChallengeProgress} from '../Components/Stats1';

const drawerWidth = 60;

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#1E272E'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1, // Ensure the AppBar overlays other elements
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#1976D2',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.mixins.toolbar.minHeight + 16, // Adjust the top margin based on your needs
  },
  toolbar: theme.mixins.toolbar,
  userSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor:'#1E272E'}}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.userSection}>
          <MiniDrawer />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" noWrap>
              Username
            </Typography>
            <Avatar alt="User Avatar" src="/path/to/user-avatar.jpg" style={{ marginLeft: '8px' }} />
          </div>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MiniDrawer />
      <Container component="main" className={classes.content}>
        <div className={classes.toolbar} />
        <DashboardBox/>
        {/* <DonutChart/> */}
        {/* <ChallengeProgress progress={60} /> */}
      </Container>
    </div>
  );
};

export default Dashboard;