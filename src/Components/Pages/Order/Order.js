import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Order = ({order}) => {
    const {name, phone, email}=order;
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
           
            <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {email}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {phone} 
            </Typography>
            {/* <Button onClick={handleOrderOpen}  variant="contained">Explore More</Button> */}
        </Paper>
    </Grid>
    );
};

export default Order;