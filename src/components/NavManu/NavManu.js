import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavManu = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">
                    Doctors Portal
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="mx-3">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="mx-3">
                            About
                        </Nav.Link>
                        <Nav.Link href="#services" className="mx-3">
                            Dental Services
                        </Nav.Link>
                        <Nav.Link href="#reviews" className="mx-3">
                            Reviews
                        </Nav.Link>
                        <Nav.Link href="#blog" className="mx-3">
                            Blog
                        </Nav.Link>
                        <Nav.Link href="#contact" className="mx-3">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavManu;
