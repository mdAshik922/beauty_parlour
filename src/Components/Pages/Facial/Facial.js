import React from 'react';
import './Facial.css';

const Facial = () => {
    return (
        <div style={{ marginTop: "4%", backgroundColor: "#fff4f6"}}>
            <div className='facial'>
                <div style={{paddingBottom: "5%", paddingTop: "5%"}}>
                    <img src="https://i.ibb.co/0GkRZnn/Screenshot-4.png" alt="facial"/>
                </div>
                <div style={{marginRight: "3%"}}>
                    <h4>Let us handle your screen <span style={{color: "#eb5f78", fontSize: "1rem"}} >Professionally</span>.</h4>
                <p >With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                    <div>
                        <h3 style={{color: "#eb5f78", fontSize: "2rem"}}>500+</h3>
                        <h5>Happy Coustomer</h5>
                    </div>
                    <div>
                        <h3 style={{color: "#eb5f78", fontSize: "2rem"}}>16+</h3>
                        <h5>Total Service</h5>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default Facial;