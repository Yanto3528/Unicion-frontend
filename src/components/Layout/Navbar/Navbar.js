import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectIsAuthenticated } from "../../../redux/users/userSelector";

import NavList from "./NavList/NavList";
import Searchbar from "../Searchbar/Searchbar";

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
            <Searchbar />
            {isAuthenticated && <NavList />}
          </NavContainer>
        </Container>
      </NavOuterContainer>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
