import React from 'react';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Exceptional from '../components/Exceptional/Exceptional';
import Appointment from '../components/Appointment/Appointment';
import Testimonial from '../components/Testimonial/Testimonial';

const Main = () => {
    return (
        <>
            <Header />
            <Services />
            <Exceptional />
            <Appointment />
            <Testimonial />
        </>
    );
};

export default Main;
