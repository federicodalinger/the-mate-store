// import 'bootstrap/dist/css/bootstrap.min.css';

// //Para este NavBar implemento React-Bootstrap:
// import Container from 'react-bootstrap/esm/Container';
// import Nav from 'react-bootstrap/esm/Nav';
// import Navbar from 'react-bootstrap/esm/Navbar';
// import NavDropdown from 'react-bootstrap/esm/NavDropdown';

// const NavBar = () => {
//   return (
//     <Navbar bg="light" expand="lg" fixed="top">
//     <Container>
//       <Navbar.Brand href="#home">The Mate Store 🧉</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Contact</Nav.Link>
//           <NavDropdown title="Types" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Wood mates</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">Pumpkin mates</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Stainless Steel mates</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.4">3D printed mates</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   );
// }
// export default NavBar;

import { AppBar } from "@material-ui/core"
import CartWidget from "./CartWidget"
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "./styledComponents"

const NavBar = () => {
  return (
    <AppBar position="relative">
      <Wrapper>
        <Left>
          <Logo>The Mate Store 🧉</Logo>
        </Left>
        <Center>
          <MenuItem>Home</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Types</MenuItem>
        </Center>
        <Right>
          <MenuItem>Contact</MenuItem>
          <MenuItem>About us</MenuItem>
          <MenuItem><CartWidget/></MenuItem>
        </Right>
      </Wrapper>
    </AppBar>
  );
}

export default NavBar;