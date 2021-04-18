import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <Navbar variant="dark" className="mb-2" expand="lg">
      <Navbar.Brand href="#home">
        <strong>Food Cashier App</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
