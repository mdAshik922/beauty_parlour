import React from 'react';
import Facial from '../Facial/Facial';
import Banner from '../HomeBanner/Banner';
import Message from '../SendMessage/Message';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
 
           <Banner></Banner>
           <Service></Service>
           <Facial></Facial>
           <Message></Message>
        </div>
    );
};

export default Home;