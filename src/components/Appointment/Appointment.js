import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import doctor from '../../images/doctor.png';
import '../../styles/appointment.css';

const Appointment = () => {
    return (
        <section className="appointment my-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <img src={doctor} alt="doctor" />
                    </Col>
                    <Col md={7} className="info">
                        <h6 className="text-uppercase">Appointment</h6>
                        <h2>
                            Exceptional Dental Care, on Your Terms and
                            Conditions
                        </h2>
                        <p className="my-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eos minus obcaecati fuga nostrum omnis.
                            Quaerat nam quibusdam quae nulla dolores debitis
                            voluptatum, magni quas asperiores repellat dolore
                            molestias ducimus nobis?
                        </p>
                        <button className="btn custom-btn">Learn More</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appointment;
