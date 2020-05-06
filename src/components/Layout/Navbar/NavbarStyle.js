import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 6rem;
  position: fixed;
  z-index: 10;
  ${({ isAuthenticated }) =>
    isAuthenticated &&
    css`
      position: relative;
      ${NavOuterContainer} {
        background-color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      }
    `}
`;

export const NavOuterContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 6rem;
  box-shadow: none;
  background-color: transparent;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
`;

export const Logo = styled.img`
  width: 16rem;
`;
