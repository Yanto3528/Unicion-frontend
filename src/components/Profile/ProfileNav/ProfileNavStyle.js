import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ProfileNavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15);
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const activeClassName = "profile-nav-active";

export const ProfileNavItemLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.heading};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: all 0.4s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.${activeClassName} {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
