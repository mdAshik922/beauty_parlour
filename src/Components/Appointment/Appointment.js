import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
  Switch, Route,
  Link,  useRouteMatch} from "react-router-dom";
import Admin from '../Admin/Admin';
import AppointmentDashBord from './AppointmentDashBord';
import AddDoctor from '../AddDoctor/AddDoctor';
import './Appointment.css';

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
      <NavLink  to="/" className='nav-button'> <Button  variant="text"  >Home</Button></NavLink>
      <NavLink  to={`${url}`} className='nav-button'> <Button  color="inherit">Dashbord</Button></NavLink>
      <Link  to={`${url}/admin`} className='nav-button'> <Button  color="inherit">Admin</Button></Link>
      <Link  to={`${url}/adddoctor`} className='nav-button'> <Button  color="inherit">Add-Doctor</Button></Link>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
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
          <Route  path={`${path}/admin`} className='nav-button'><Admin></Admin></Route>
          <Route  path={`${path}/adddoctor`} className='nav-button'><AddDoctor></AddDoctor></Route>
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
