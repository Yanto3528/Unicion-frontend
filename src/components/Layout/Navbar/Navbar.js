import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenu } from "../../../redux/menu/menuActions";

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
  MenuContainer,
} from "./NavbarStyle";
import { MenuIcon } from "../../../styles/shared/Icons";

import logo from "../../../assets/logo.svg";
import logoWhite from "../../../assets/logo-white.svg";

const Navbar = ({ isAuthenticated, toggleMenu }) => {
  const location = useLocation();
  const showMenuIcon = !location.pathname.includes("profile");
  return (
    <NavbarContainer isAuthenticated={isAuthenticated}>
      <NavOuterContainer>
        <Container>
          <NavContainer>
            <MenuContainer>
              <Link to="/dashboard/newsfeed">
                <Logo src={isAuthenticated ? logo : logoWhite} alt="Unicion" />
              </Link>
              {showMenuIcon && <MenuIcon onClick={toggleMenu} />}
            </MenuContainer>
            {isAuthenticated && (
              <Fragment>
                <Searchbar />
                <NavList />
              </Fragment>
            )}
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

export default connect(mapStateToProps, { toggleMenu })(Navbar);
