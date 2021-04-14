import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import loginImage from '../images/login.png';

const SignIn = () => {
    return (
        <Container>
            <Row>
                <Col md={6}></Col>
                <Col md={6}>
                    <img src={loginImage} alt="loginImage" />
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;
