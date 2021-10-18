import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Header Internal Style 
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#e6520e",
        borderBottom: "solid 2px #e6520e"
    }

    // Internal Style Use here 
    return (
        <div>
            {/* Bootstrap Tag use here  */}
            <Navbar variant="light" expand="lg" className="fixed-top" style={{ "backgroundColor": "rgba(253, 245, 230, 0.74)"}}>
            <Container fluid>
                <NavLink style={{color: "#e6520e"}} className="navbar-brand fw-bold" to="/home"> <img style={{height: 50, width: 50, borderRadius: "50%"}} src="https://thumbs.dreamstime.com/b/initial-letter-hp-logotype-company-name-colored-orange-grey-swoosh-star-design-vector-logo-business-identity-203968791.jpg" />HomePharma</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/services">Medicines</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/faq">Contact</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/signin">SignIn</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;