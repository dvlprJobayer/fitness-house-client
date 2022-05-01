import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import LoginCanvas from '../LoginCanvas/LoginCanvas';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Header = () => {

    const [user, loading] = useAuthState(auth);

    const location = useLocation();
    const [showCanvas, setShowCanvas] = useState(true);
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/signup' || user) {
            setShowCanvas(false);
        } else {
            setShowCanvas(true);
        }
    }, [location, user]);
    useEffect(() => {
        if (loading) {
            <Loading />
        }
    }, [loading]);

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
                            {
                                user && <>
                                    <Nav.Link className='fw-bold text-black' as={NavLink} to="/manage">Manage Items</Nav.Link>
                                    <Nav.Link className='fw-bold text-black' as={NavLink} to="/add-item">Add Item</Nav.Link>
                                    <Nav.Link className='fw-bold text-black' as={NavLink} to="/my-items">My Items</Nav.Link>
                                </>
                            }
                        </Nav>
                        <div>
                            {user && <p onClick={() => signOut(auth)} className="mb-0 color fw-bold" style={{ cursor: 'pointer' }}>Sign Out</p>}
                            {showCanvas && <LoginCanvas />}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;