import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { bookings } from '../../data/bookings';
import '../../styles/availableAppointment.css';
import Booking from './Booking';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <section className="available-appointment container my-5">
            <h2 className="appointment-title">
                Available Appointments on {selectedDate.toDateString()}
            </h2>
            <Row>
                {bookings.map((booking) => (
                    <Col key={booking.id} md={4}>
                        <Booking {...booking} selectedDate={selectedDate} />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default AvailableAppointment;
