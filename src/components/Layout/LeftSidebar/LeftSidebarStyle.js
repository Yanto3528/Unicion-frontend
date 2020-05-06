import styled from "styled-components";

export const LeftSidebarContainer = styled.ul`
  padding: 2rem 0;
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
`;
