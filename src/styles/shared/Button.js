import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 1rem 2.5rem;
  margin: ${({ margin }) => margin};
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.secondaryBright : theme.primary};
  color: white;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.9;
  }
  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
      font-size: 1.4rem;
    `}
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: -0.5rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.greyLight};
  margin: 0;
`;

export default Button;
