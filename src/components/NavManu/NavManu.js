import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavManu = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Doctors Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="mx-3">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#link" className="mx-3">
                            About
                        </Nav.Link>
                        <Nav.Link href="#home" className="mx-3">
                            Dental Services
                        </Nav.Link>
                        <Nav.Link href="#link" className="mx-3">
                            Reviews
                        </Nav.Link>
                        <Nav.Link href="#home" className="mx-3">
                            Blog
                        </Nav.Link>
                        <Nav.Link href="#link" className="mx-3">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavManu;
