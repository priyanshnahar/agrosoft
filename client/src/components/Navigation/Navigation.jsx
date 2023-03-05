import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import "./Navbar.css";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };



  return (
    <Navbar bg="white" expand="lg" expanded={expanded} sticky="top">
      <div className="container">
        <Navbar.Brand to="/">
          <h4>PA CONSULTANTS</h4>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Link to="service" smooth={true} duration={200} >
              Service
            </Link>
            <NavDropdown href="/" title="Subsidy Scheme" id="nav-dropdown">
              <NavDropdown href="/">Client</NavDropdown>
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Client</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">SchemeGuidlines</Nav.Link>
          </Nav>
          <button>
            <FontAwesomeIcon icon={faUser} border={false} />
          </button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
