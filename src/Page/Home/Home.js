import React from 'react';
import Banner from './Banner/Banner';
import HomeService from './HomeService/HomeService';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>


           <HomeService></HomeService>

           <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;