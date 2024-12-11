import { Link } from "react-router-dom"; 
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand href="/">Car App</Navbar.Brand>

        {/* Navbar items (collapsible in smaller screens) */}
        <Nav className="ml-auto">
          <Link to="add-car">
            <Button variant="outline-light">Add New Car</Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
