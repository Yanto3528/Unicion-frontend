import styled, { css, keyframes } from "styled-components";
import Dropdown from "../../../../styles/shared/Dropdown";

const slideIn = keyframes`
  from {
    transform: translate(25%, 90%);
    opacity: 0;
  }
  to {
    transform: translate(25%, 100%);
    opacity: 1;
  }
`;

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

export const NavItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span,
  h3 {
    margin-right: 1rem;
  }
  ${Dropdown} {
    bottom: -3rem;
    transform: translate(25%, 100%);
    animation: ${slideIn} 0.5s;
  }
  ${({ hasNotif }) => hasNotif && notifIcon}
`;
