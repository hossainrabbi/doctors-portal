import React from 'react';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Exceptional from '../components/Exceptional/Exceptional';
import Appointment from '../components/Appointment/Appointment';
import Testimonial from '../components/Testimonial/Testimonial';
import Blog from '../components/Blog/Blog';
import Teams from '../components/Teams/Teams';
import Contact from '../components/Contact/Contact';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Services />
                <Exceptional />
                <Appointment />
                <Testimonial />
                <Blog />
                <Teams />
                <Contact />
            </main>
        </>
    );
};

export default Home;
