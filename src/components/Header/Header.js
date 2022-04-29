import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar className='navbar light' expand="lg">
                <Container>
                    <Navbar.Brand className='fs-4 fw-bold mb-1' as={Link} to="/">Fitness House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto ms-4 my-lg-0"
                        >
                            <Nav.Link className='fw-bold text-black' as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link className='fw-bold text-black' as={NavLink} to="/inventories">Manage Inventories</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            <h3>USER</h3>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;