import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import map from '../../Icon/map-pin-2-fill.png';

const Footer = () => {
    return (
        <Box sx={{ width: '100%',
            height: 300,
           color: "white",
            backgroundColor: '#f35975'}}>
                <Grid container spacing={2}>
                <Grid item xs={8}  md={12}>
                 <Typography variant="h6">
<img width="15px" src={map} alt=""/>
H#000 (1st Floor), Road #00, 
         </Typography>
                 <Typography variant="h6">

 Now DOHS, Mohakhali, Dhaka, Bangladesh
         </Typography>
                
  </Grid>
                 <Grid item xs={4} md={6}>
                 <Typography variant="h6">
magendo
         </Typography>
                 <Typography variant="h6">
magendo
about 
project
out team
         </Typography>
  </Grid>
                 <Grid item xs={4} md={6}>
                 <Typography variant="h4">
magendo
         </Typography>
                 <Typography variant="h5">
magendo
about 
project
out team
         </Typography>
  </Grid>
                </Grid>
         
        </Box>
    );
};

export default Footer;