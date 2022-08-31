import 'bootstrap/dist/css/bootstrap.min.css';

//Para este NavBar implemento React-Bootstrap:
import Container from '../../node_modules/react-bootstrap/Container';
import Nav from '../../node_modules/react-bootstrap/Nav';
import Navbar from '../../node_modules/react-bootstrap/Navbar';
import NavDropdown from '../../node_modules/react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">The Mate Store 🧉</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <NavDropdown title="Types" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Wood mates</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pumpkin mates</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Stainless Steel mates</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">3D printed mates</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default NavBar;