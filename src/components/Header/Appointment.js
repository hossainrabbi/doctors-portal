import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { appointment } from '../../data/appointment';
import AppointmentCard from './AppointmentCard';

const Appointment = () => {
    return (
        <Container>
            <Row>
                {appointment.map((data) => (
                    <Col md={4} key={data.id}>
                        <AppointmentCard {...data} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Appointment;
