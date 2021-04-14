import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import chair from '../../images/chair.jpg';
import Visit from './Visit';
import '../../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Container className="home d-flex align-items-center">
                <Row className="align-items-center">
                    <Col md={5}>
                        <h1>Your New Smile Starts Here</h1>
                        <p className="my-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Non vel nobis cupiditate quisquam modi.
                        </p>
                        <Link to="/appointment" className="btn custom-btn">
                            Get Appointment
                        </Link>
                    </Col>
                    <Col md={7}>
                        <img src={chair} alt="doctor-chair" />
                    </Col>
                </Row>
            </Container>
            <Visit />
        </header>
    );
};

export default Header;
