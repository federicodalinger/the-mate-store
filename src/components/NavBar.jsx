import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/esm/Nav';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';

import { AppBar } from "@material-ui/core"
import CartWidget from "./CartWidget"
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "./styledComponents"

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="relative">
        <Wrapper>
            <Left>
                <Nav.Link as={Link} to={'/'}>
                    <Logo>The Mate Store 🧉</Logo>
                </Nav.Link>
            </Left>

            <Center>
                <MenuItem>
                    <Nav.Link>History</Nav.Link>
                </MenuItem>

                <MenuItem>
                    <NavDropdown title="Yerba types" id="basic-nav-dropdown">
                        <NavDropdown.Item >Argentinian Brands</NavDropdown.Item>
                        <NavDropdown.Item >From Around the World</NavDropdown.Item>
                        <NavDropdown.Item >Homemade</NavDropdown.Item>
                    </NavDropdown>
                </MenuItem>

                <MenuItem>
                <NavDropdown title="Mate types" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={'/category/1'}>Wood mates</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/category/2'}>Pumpkin mates</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/category/3'}>Stainless Steel mates</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/category/4'}>3D printed mates</NavDropdown.Item>
                    </NavDropdown>
                </MenuItem>
            </Center>
            
            <Right>
                <MenuItem>
                    <Nav.Link >Contact</Nav.Link>
                </MenuItem>
                <MenuItem>
                    <Nav.Link >About us</Nav.Link>
                </MenuItem>
                <MenuItem>
                    <Nav.Link >
                        <CartWidget/>
                    </Nav.Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </AppBar>
  );
}

export default NavBar;