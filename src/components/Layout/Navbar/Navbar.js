import React from "react";
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
  SmallLogo,
  MenuContainer,
} from "./NavbarStyle";
import { MenuIcon } from "../../../styles/shared/Icons";

import logo from "../../../assets/logo.svg";
import logoSmall from "../../../assets/logo-sm.svg";

const Navbar = ({ isAuthenticated, toggleMenu }) => {
  const location = useLocation();
  const showMenuIcon = !location.pathname.includes("profile");
  return (
    isAuthenticated && (
      <NavbarContainer>
        <NavOuterContainer>
          <Container>
            <NavContainer>
              <MenuContainer>
                <Link to="/dashboard/newsfeed">
                  <Logo src={logo} alt="Unicion" />
                  <SmallLogo src={logoSmall} alt="Unicion" />
                </Link>
                {showMenuIcon && <MenuIcon onClick={toggleMenu} />}
              </MenuContainer>
              <Searchbar />
              <NavList />
            </NavContainer>
          </Container>
        </NavOuterContainer>
      </NavbarContainer>
    )
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
});

export default connect(mapStateToProps, { toggleMenu })(Navbar);
