import styled from "styled-components";

export const LeftSidebarContainer = styled.ul`
  position: sticky;
  top: 10rem;
  margin-right: 8rem;
  @media (max-width: 1000px) {
    position: fixed;
    top: 6rem;
    left: 0;
    height: 100vh;
    z-index: 10;
    background-color: white;
    padding: 2rem;
    transition: all 0.5s;
    transform: ${({ isOpen }) => {
      switch (isOpen) {
        case true:
          return "translateX(0)";
        default:
          return "translateX(-100%)";
      }
    }};
  }
`;

export const SidebarNavList = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  transition: all 0.4s;
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  border-radius: 1rem;
  a {
    color: ${({ theme }) => theme.text};
    transition: all 0.4s;
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primaryLight2};
    a {
      color: ${({ theme }) => theme.primary};
    }
  }
  @media (max-width: 575px) {
    font-size: 1.2rem;
  }
`;
