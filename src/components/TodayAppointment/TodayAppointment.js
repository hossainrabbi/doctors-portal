import React from 'react';
import { Col, Row } from 'react-bootstrap';

const TodayAppointment = () => {
    return (
        <section className="container mt-100">
            <Row className="align-items-center">
                <Col md={5}>
                    <img src="" alt="" />
                </Col>
                <Col md={7}>
                    <h6 className="text-uppercase">Appointment</h6>
                    <h2>
                        Exceptional Dental Care, on Your Terms and Conditions
                    </h2>
                    <p className="my-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eos minus obcaecati fuga nostrum omnis. Quaerat
                        nam quibusdam quae nulla dolores debitis voluptatum,
                        magni quas asperiores repellat dolore molestias ducimus
                        nobis?
                    </p>
                    <button className="btn custom-btn">Learn More</button>
                </Col>
            </Row>
        </section>
    );
};

export default TodayAppointment;
