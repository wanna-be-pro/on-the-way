import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
    <div className="">
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
    );
};

export default Header;