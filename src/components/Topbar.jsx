import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Topbar() {
    let navigate = useNavigate();
    const navbarStyle = {
        backgroundColor: 'lightBlue', 
        fontFamily: 'serif'
    };

    return (
        <Navbar expand="lg" style={navbarStyle}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>
                            <h5><b>Dashboard</b></h5>
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate("/create")}>
                            <h5><b>Create</b></h5>
                        </Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <h5>Signed in as :</h5>
                            <h4>Ravana</h4>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Topbar;
