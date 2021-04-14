import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    footerAddress,
    footerHealth,
    footerMain,
    footerServices,
} from '../../data/footer';
import FooterContent from './FooterContent';
import '../../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialItems } from '../../data/socialItem';
import CopyRight from './CopyRight';

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="footer-item">
                            <h5 className="footer-title no-text">.</h5>
                            {footerMain.map((data) => (
                                <FooterContent {...data} key={data.id} />
                            ))}
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-item">
                            <h5 className="footer-title">Services</h5>
                            {footerServices.map((data) => (
                                <FooterContent {...data} key={data.id} />
                            ))}
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-item">
                            <h5 className="footer-title">Health</h5>
                            {footerHealth.map((data) => (
                                <FooterContent
                                    title="Health"
                                    {...data}
                                    key={data.id}
                                />
                            ))}
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-item">
                            <h5 className="footer-title">Address</h5>
                            {footerAddress.map((data) => (
                                <FooterContent
                                    title=""
                                    {...data}
                                    key={data.id}
                                />
                            ))}
                            <div className="social-media mt-4">
                                {socialItems.map((item) => {
                                    const { id, icon, link } = item;
                                    return (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={id}
                                        >
                                            <FontAwesomeIcon icon={icon} />
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="mt-4">
                                <h6>Call Now:</h6>
                                <button className="btn custom-btn">
                                    +8801711111111
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <CopyRight />
            </Container>
        </footer>
    );
};

export default Footer;
