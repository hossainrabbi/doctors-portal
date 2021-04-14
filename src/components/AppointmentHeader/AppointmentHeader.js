import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../images/chair.jpg';
import '../../styles/calendar.css';

const AppointmentHeader = ({ dateChange }) => {
    return (
        <header className="header">
            <Container className="home d-flex align-items-center">
                <Row className="align-items-center">
                    <Col md={5}>
                        <Calendar
                            className="calendar"
                            onChange={dateChange}
                            value={new Date()}
                        />
                    </Col>
                    <Col md={7}>
                        <img src={chair} alt="doctor-chair" />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default AppointmentHeader;
