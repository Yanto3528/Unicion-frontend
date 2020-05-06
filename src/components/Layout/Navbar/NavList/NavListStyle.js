import styled, { css } from "styled-components";

const notifIcon = css`
  :after {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(75%, -75%);
  }
`;

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

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span,
  h3 {
    margin-right: 1rem;
  }
  ${({ hasNotif }) => hasNotif && notifIcon}
`;
