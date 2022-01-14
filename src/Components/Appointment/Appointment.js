import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Admin from '../Admin/Admin';
import AppointmentDashBord from './AppointmentDashBord';
import AddDoctor from '../AddDoctor/AddDoctor';


const drawerWidth = 140;

function Appointment(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);


  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {

    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink  to="/"> <Button  variant="text"  style={{color:"black", textDecoration: "none"}}>Home</Button></NavLink>
      <NavLink  to={`${url}`}> <Button  color="inherit">Dashbord</Button></NavLink>
      <Link  to={`${url}/admin`}> <Button  color="inherit">Admin</Button></Link>
      <Link  to={`${url}/adddoctor`}> <Button  color="inherit">Add-Doctor</Button></Link>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
      
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Appointment
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders" >
     
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }} >
       
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }} open >
         
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}><AppointmentDashBord></AppointmentDashBord></Route>
          <Route  path={`${path}/admin`}><Admin></Admin></Route>
          <Route  path={`${path}/adddoctor`}><AddDoctor></AddDoctor></Route>
        </Switch>

      </Box>
    </Box>
  );
}

Appointment.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appointment;
