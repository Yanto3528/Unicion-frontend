import styled from "styled-components";
import { AvatarStyle } from "../../../shared/Avatar/AvatarStyle";

export const NavListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavListItem = styled.li`
  :first-child {
    display: none;
  }
  &:not(:last-child) {
    margin-right: 5rem;
  }
  @media (max-width: 800px) {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  @media (max-width: 600px) {
    ${AvatarStyle} {
      width: 3rem;
      height: 3rem;
      margin-right: 0;
    }
  }
  @media (max-width: 450px) {
    :first-child {
      display: block;
    }
  }
`;
