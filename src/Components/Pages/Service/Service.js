import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ShowService from './ShowService';

const items = [
    {
        id: '1',
        name: 'Anti Age Face Treatment',
        price: '199',
        img: 'https://i.ibb.co/x6D9Ybk/Group-1373.png',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product'
    },
    {
        id: '2',
        name: 'Hair Color Styleing',
        price: '99',
        img: 'https://i.ibb.co/djY167J/Group-1372.png',
        description: 'Amazing fiyers social media posts and brand representations that would make your brand stand out'
    },
    {
        id: '3',
        name: 'Skin Care Treatment',
        price: '299',
        img: 'https://i.ibb.co/TvYn98Y/Group-1374.png',
        description: 'With well written codes. we build amazing apps for all platforms. mobile and web apps in genaral.'
    }
]
const Service = () => {

  
const [itemSuccess, setItemSuccess]=useState(false);



    return (
        <Container>
        <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Our Awesome Service </Typography>
        {/* {itemSuccess && <Alert severity="success"> successfully!</Alert>} */}
        <Grid container spacing={2}>
            {
                items.map(item => <ShowService
                    key={item.id}
                    item={item}
                  
                    setBookingSuccess={setItemSuccess}
                >
                </ShowService>)
            }
        </Grid>
    </Container>
    );
};

export default Service;