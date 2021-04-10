import React from 'react';
import Exceptional from '../components/Exceptional/Exceptional';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import TodayAppointment from '../components/TodayAppointment/TodayAppointment';

const Main = () => {
    return (
        <>
            <Header />
            <Services />
            <Exceptional />
            <TodayAppointment />
        </>
    );
};

export default Main;
