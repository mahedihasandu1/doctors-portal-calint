import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ExData from '../ExData/ExData';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointMent from '../MakeAppointMent/MakeAppointMent';
import Testimonial from '../Pat/Testimonial';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <ExData></ExData>
           <MakeAppointMent></MakeAppointMent>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;