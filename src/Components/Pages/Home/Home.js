import React from 'react';

import Banner from '../HomeBanner/Banner';
import Message from '../SendMessage/Message';
import Service from '../Service/Service';



const Home = () => {
    return (
        <div>
 
           <Banner></Banner>
           <Service></Service>
           <Message></Message>
        </div>
    );
};

export default Home;