import { useState } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="white" expand="lg" expanded={expanded} sticky="top">
      <div className="container">
        <Navbar.Brand href="#">
          <h4>PA CONSULTANTS</h4>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#features">Subsidy Scheme</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Client</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href= "#contact">Contact</Nav.Link>
          </Nav>
          <button className="btn btn-primary ms-lg-3">Join Us</button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
