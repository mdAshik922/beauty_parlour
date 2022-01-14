import React, {useEffect, useState} from 'react';
import Order from '../Pages/Order/Order';
import useAuth from '../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

const AppointmentDashBord = () => {
    const [orders, setOrders]=useState([]);
    const {user} = useAuth();
    
      useEffect(()=>{
        const url = `http://localhost:5000/order?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          setOrders(data)
        })
      },[])
      
    return (
       <Box>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>YOUR ORDERS:{orders.length}</Typography>
        {/* {itemSuccess && <Alert severity="success"> successfully!</Alert>} */}
        <Grid container spacing={2}>
            {
                orders.map(order => <Order
                    key={order._id}
                    order={order}
                  
                >
                </Order>)
            }
        </Grid>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell> 
            <TableCell align="right">Serivce</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.service}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </Box>
    );
};

export default AppointmentDashBord;