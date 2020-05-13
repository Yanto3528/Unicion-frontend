import styled from "styled-components";
import { MenuIcon } from "../../../styles/shared/Icons";

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 6rem;
  position: relative;
  background-color: transparent;
  z-index: 10;
`;

export const NavOuterContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 6rem;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
`;

export const Logo = styled.img`
  width: 16rem;
  margin-right: 2rem;
  @media (max-width: 600px) {
    width: 10rem;
    margin-right: 1rem;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SmallLogo = styled(Logo)`
  display: none;
  @media (max-width: 700px) {
    display: inline;
    width: 3rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  ${MenuIcon} {
    display: none;
  }
  @media (max-width: 1000px) {
    ${MenuIcon} {
      display: inline-block;
    }
  }
`;
