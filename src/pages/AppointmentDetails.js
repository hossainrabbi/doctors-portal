import React, { useState } from 'react';
import AppointmentHeader from '../components/AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../components/AvailableAppointment/AvailableAppointment';
import Footer from '../components/Footer/Footer';

const AppointmentDetails = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const dateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
            <AppointmentHeader dateChange={dateChange} />
            <AvailableAppointment selectedDate={selectedDate} />
            <Footer />
        </>
    );
};

export default AppointmentDetails;
