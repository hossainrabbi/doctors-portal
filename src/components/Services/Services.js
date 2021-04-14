import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { services } from '../../data/services';
import ServicesCard from './ServicesCard';
import '../../styles/services.css';

const Services = () => {
    return (
        <section className="services container py-5 mt-5" id="services">
            <div className="title">
                <h6>Our Services</h6>
                <h2>Services We Provide</h2>
            </div>
            <Row>
                {services.map((service) => (
                    <Col md={4} key={service.id}>
                        <ServicesCard {...service} />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Services;
