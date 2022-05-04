import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Blogs from '../../Blogs/Blogs';
import './Header.css'
const Header = () => {
    return (
    <div className="">
            <Navbar bg="primary fixed-top" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><h3 className='mx-auto '>On The way</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto me-auto ">
                            <Nav.Link href="/home"><h4>Home</h4></Nav.Link>
                            <Nav.Link href="/blogs"><h4>Blogs</h4></Nav.Link>
                            <Nav.Link href="/services"><h4>Services</h4></Nav.Link> 
                            <Nav.Link href="/chackout"><h4>Chackout</h4></Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='mt-5'>.</div>

    </div>
    );
};

export default Header;