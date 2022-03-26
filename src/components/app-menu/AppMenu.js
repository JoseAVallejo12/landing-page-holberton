import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import { drawerMenu } from './drawerMenu';
import { Squash as Hamburger } from 'hamburger-react';
import NavegationIcons from '../navegation-icons/NavegationIcons';
import NavTabs from '../nav-tabs/NavTabs';
import logo1 from '../../assets/img/logo01.png'
import './appmenu.css'


const AppMenu = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box>
      <AppBar position="sticky" sx={{ boxShadow: 0, bgcolor: 0 }} enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img src={logo1} style={{ width: '230px' }} alt="logo" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Hamburger rounded onToggle={toggleDrawer("right", true)} toggled={state.right} />
              <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {drawerMenu("right", toggleDrawer)}
              </Drawer>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <img src={logo1} style={{ width: '160px' }} alt="logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <NavTabs />
            </Box>

            <Box sx={{ display: { md: 'block', xs: 'none' } }} >
              <NavegationIcons />
            </Box>
          </Toolbar>
        </Container>
      </AppBar >

    </Box>

  );
};
export default AppMenu;