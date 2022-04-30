import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import LoginCanvas from '../LoginCanvas/LoginCanvas';

const Header = () => {

    const location = useLocation();
    const [showCanvas, setShowCanvas] = useState(true);
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/signup') {
            setShowCanvas(false);
        } else {
            setShowCanvas(true);
        }
    }, [location]);

    return (
        <header>
            <Navbar className='navbar light' expand="lg">
                <Container>
                    <Navbar.Brand className='fs-4 fw-bold mb-lg-1' as={Link} to="/">Fitness House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto ms-lg-4 my-lg-0"
                        >
                            <Nav.Link className='fw-bold text-black' as={NavLink} to="/inventories">Manage Inventories</Nav.Link>
                        </Nav>
                        <div>
                            {/* <Nav.Link className='fw-bold text-black ps-0' as={NavLink} to="/login">Login</Nav.Link> */}
                            {showCanvas && <LoginCanvas />}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;