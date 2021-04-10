import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import chair from '../../images/chair.png';

const Home = () => {
    return (
        <Container className="home d-flex align-items-center">
            <Row className="align-items-center">
                <Col md={5}>
                    <h1>Your New Smile Starts Here</h1>
                    <p className="my-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Non vel nobis cupiditate quisquam modi.
                    </p>
                    <button className="btn custom-btn">Get Appointment</button>
                </Col>
                <Col md={7}>
                    <img src={chair} alt="doctor-chair" />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
