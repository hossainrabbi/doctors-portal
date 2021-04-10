import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { visit } from '../../data/visit';
import VisitCard from './VisitCard';

const Visit = () => {
    return (
        <Container>
            <Row>
                {visit.map((data) => (
                    <Col md={4} key={data.id}>
                        <VisitCard {...data} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Visit;
