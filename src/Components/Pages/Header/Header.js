import  IconButton from "@mui/material/IconButton";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import icon from'../../Group 33092.png';
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router-dom";

const Header = () => {
  const {user, logOut} = useAuth();
   
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: 'pink'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img width="10%" src={icon} alt=""/>
          </Typography>
          {/* <NavLink style={{textDecoration: 'naone'}} to="/appointment"><Button color="inherit" >Appointment</Button></NavLink> */}
         {user.email? 
<Box>
<NavLink  to="/appointment"> <Button  color="inherit">Appointment</Button></NavLink>

<Button onClick={logOut} color="inherit">Logout</Button>
</Box>
         :
<NavLink to="/login"> <Button color="inherit">Login</Button></NavLink>

}
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;