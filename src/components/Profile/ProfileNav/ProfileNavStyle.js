import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileNavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15);
`;

export const ProfileNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem;
  cursor: pointer;
`;

export const ProfileNavItemLink = styled(Link)`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.heading};
  transition: all 0.4s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
