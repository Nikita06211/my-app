import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, CssBaseline, Container } from '@mui/material';
import { styled } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import { MiniDrawer } from '../Components/SideNav';
import DashboardBox from '../Components/DashboardBox';
import { App } from '../Components/Stats1';
import { ProgressChart } from '../Components/Progress_Ring';
import { CarbonFootprintBarChart } from '../Components/BarGraph1';
import { DoubleBarChart } from '../Components/BarGraph2';

const drawerWidth = 60;

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#1E272E',
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
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.mixins.toolbar.minHeight + 16,
  },
  toolbar: theme.mixins.toolbar,
  userSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(2),
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align to the left
    padding: theme.spacing(3), // Align to the left
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: '#1E272E' }}>
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
        <div className={classes.chartContainer}>
          <DashboardBox />
          <div style={{ display: 'flex' }}>
            <App style={{ alignItems: 'flex-start' }} />
            <CarbonFootprintBarChart style={{ alignItems: 'flex-end' }} />
          </div>
          <div style={{ display: 'flex' }}>
            <ProgressChart style={{ alignItems: 'flex-start' }} />
            <DoubleBarChart style={{ alignItems: 'flex-end' }} />
          </div>


        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
