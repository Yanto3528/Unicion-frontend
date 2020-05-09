import styled from "styled-components";

export const NavListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 5rem;
  }
`;
