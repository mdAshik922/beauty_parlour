import Typography  from '@mui/material/Typography';
import  Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import beauty from '../../Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'rgba(255, 255, 128, .5)' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        <Typography variant="h3" gutterBottom component="div">
       BEAUTY SELON FOR EVER WOMEN
      </Typography>
        <Typography variant="h6" gutterBottom component="div">
        What defines your beauty?beauty 
It's a radiance of spirit, having character,
 kindness to ourselves and to others,
 it's strength and self-confidence to know that with 
 or without makeup the real beauty is you
      </Typography>
<Link to="/appointment"><Button variant="contained" >Get an appointment</Button></Link>
        </Grid>
        <Grid item xs={6} md={4}>
         <img width="75%" src={beauty} alt=""/>
        </Grid>
      
      </Grid>
    </Box>
    );
};

export default Banner;