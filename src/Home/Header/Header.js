import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebookMessenger, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/'><Navbar.Brand className='text-primary fw-bold'><h3>Jetty</h3></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className='text-primary fw-bold'><FaPhone></FaPhone></Nav.Link>
                            <Nav.Link className='text-primary fw-bold' eventKey={2}>
                                <FaFacebookMessenger></FaFacebookMessenger>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;