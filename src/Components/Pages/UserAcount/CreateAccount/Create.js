
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React, { useState} from 'react';
import Alert from '@mui/material/Alert';
import  { useHistory } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Create = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, createAccount, isLoding, authError } = useAuth();

    const handelInput =e =>{
        const field = e.target.name;
        const value = e.target.value;
   const newLoginData = {...loginData};
newLoginData[field]=value;
setLoginData(newLoginData);
    }
    const handelSubmit =e=>{
        if(loginData.password !== loginData.confirm){
            alert('please correct your password')
            return
        }

        createAccount(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    


    return (
       

<Box sx={{ minWidth: 275 , marginBottom: '30px'}}>
<Card style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', alingItem: 'center', justifyContent: 'center', marginTop: '20%'}} variant="outlined">

{!isLoding &&<form onSubmit={handelSubmit}>
    
<TextField onBlur={handelInput} name="name"  label=" Name" variant="standard"  focused />
<br/>
<br/>

<TextField onBlur={handelInput} name="email"  type="email" label=" Email" variant="standard"  focused />
<br/>
<br/>

<TextField onBlur={handelInput} name="password"  type="password" label=" Password" variant="standard"  focused />

<br/>
<br/>
<TextField onBlur={handelInput} name="confirm"  type="password" label="Confirm-Password"  variant="standard" focused/>
 
<br/>
<br/>
<Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
<NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
</form>}
<br/>
<br/>
{isLoding && <CircularProgress />}
                    {user.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
      <Button variant="contained" style={{backgroundColor: 'red'}}>
 Google-Sign-up
</Button>


</Card>
</Box>

    );
};

export default Create;