import React from 'react';
import {Container, Nav,  Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../../images/capturedMomentLogo.png'
const Header = () => {
    return (

        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="home"> <img  width={170} alt ="" src={logo}/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-4 text-">
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About Me</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="login">Login/Registration</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;