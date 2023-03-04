import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from "../Images/logo.png";

const Container = styled(AppBar)`
  background: #151515;
`;

function Header() {
  return (
    <Container position="static">
      <Toolbar>
        <img src={Logo} alt="logo" className="logo-img" />
      </Toolbar>
    </Container>
  );
}
export default Header;
