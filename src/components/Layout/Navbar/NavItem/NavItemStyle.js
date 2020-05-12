import styled, { css, keyframes } from "styled-components";
import Dropdown from "../../../../styles/shared/Dropdown";

const slideIn = keyframes`
  from {
    transform: translate(25%,90%);
    opacity: 0;
  }
  to {
    transform: translate(25%,100%);
    opacity: 1;
  }
`;

const slideInSmall = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
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
    top: -5px;
    right: -5px;
    animation: ${scaleIn} 0.5s;
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
  @media (max-width: 600px) {
    ${Dropdown} {
      position: fixed;
      width: 100vw;
      top: 8rem;
      transform: translate(0);
      animation: ${slideInSmall} 0.5s;
    }
  }
`;
