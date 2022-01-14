import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React from 'react';
import ServiceModal from './ServiceModal';

const ShowService = ({item}) => {
    const{name, img, description, price}=item;
    const [openOrder, setOrderOpen] = React.useState(false);
    const handleOrderOpen = () => setOrderOpen(true);
    const handleOrderClose = () => setOrderOpen(false);
    return (
     <>
        <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <img width="25%" src={img} alt=""/>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {price}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {description} 
                    </Typography>
                    <Button onClick={handleOrderOpen}  variant="contained">Explore More</Button>
                </Paper>
            </Grid>
            <ServiceModal
            item={item}
            openOrder={openOrder}
         handleOrderClose={handleOrderClose}

         > </ServiceModal>
     </>
    );
};

export default ShowService;