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