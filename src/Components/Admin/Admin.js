
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Components/Hooks/useAuth';

const Admin = () => {
const[email, setEmail]=useState('');
const {token}=useAuth();

const handel=e=>{
    setEmail(e.target.value);
};
    const handelAdminSubmit= e =>{
        const user = {email};
        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            alert('success');
        })
        e.preventDefault();
    };

    return (
        <div>
            <h2>Make admin</h2>


<form onSubmit={handelAdminSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                           
                            label="Your Email"
                            name="email"
                            onChange={handel}
                            variant="standard" />

<Button type="submit" variant="contained">Make-Admin</Button>
                            </form>
            
        </div>
    );
};

export default Admin;