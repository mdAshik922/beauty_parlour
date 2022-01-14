import  TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

const Message = () => {
    const [isMessage, setMessage]=useState({});
    const handelInput = e =>{
        const field = e.target.name;
        const value = e.target.value;
   const newLoginData = {...isMessage};
newLoginData[field]=value;
setMessage(newLoginData);
    }

    const handelSubmit = e =>{

        fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
body: JSON.stringify(isMessage)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if (data.insertedId){
            alert('succes add user')
               
             
                        }
                    })
                    e.preventDefault();
    }
    return (
    
<Box sx={{ minWidth: 275,  backgroundColor: "#fff4f6", marginBottom: "10%" }}>
<Card style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', alingItem: 'center', justifyContent: 'center', marginTop: '20%'}} variant="outlined">

<form onSubmit={handelSubmit}>
    
<TextField sx={{marginRight: '15px'}} onBlur={handelInput} name="name"  label=" Name" variant="standard"  focused />

<TextField onBlur={handelInput} name="email"  type="email" label=" Email" variant="standard"  focused />
<br/>
<br/>

<TextField onBlur={handelInput} name="phone"  type="number" label=" Phone" variant="standard"  focused />

<br/>
<br/>
<TextField onBlur={handelInput}
          id="filled-multiline-static"
          label="Message"
          multiline
          name="message"
          rows={4}
          placeholder="your message"
          variant="filled"/>
 
<br/>
<br/>
<Button sx={{ width: '75%', m: 1, backgroundColor: 'green' }} type="submit" variant="contained">Send Message</Button>

</form>




</Card>
</Box>
    );
};

export default Message;