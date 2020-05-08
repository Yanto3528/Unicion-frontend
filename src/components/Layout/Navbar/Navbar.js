import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import NavList from "./NavList/NavList";

import Container from "../../../styles/shared/Container";
import {
  NavbarContainer,
  NavOuterContainer,
  NavContainer,
  Logo,
} from "./NavbarStyle";

import logo from "../../../assets/logo.svg";
import logoWhite from "../../../assets/logo-white.svg";

const Navbar = ({ isAuthenticated }) => {
  return (
    <NavbarContainer isAuthenticated={isAuthenticated}>
      <NavOuterContainer>
        <Container>
          <NavContainer>
            <Link to={`${isAuthenticated ? "/dashboard/newsfeed" : "/"}`}>
              <Logo src={isAuthenticated ? logo : logoWhite} alt="Unicion" />
            </Link>
            {isAuthenticated && <NavList />}
          </NavContainer>
        </Container>
      </NavOuterContainer>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(React.memo(Navbar));
