import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import HomeService from './HomeService/HomeService';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>


           <HomeService></HomeService>

           <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;