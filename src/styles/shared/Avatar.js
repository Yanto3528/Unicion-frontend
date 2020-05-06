import styled, { css } from "styled-components";

export default styled.span`
  display: inline-block;
  border-radius: 50%;
  width: ${({ size }) => (size ? size : "4rem")};
  height: ${({ size }) => (size ? size : "4rem")};
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  position: relative;
  ${({ whiteBG }) =>
    whiteBG &&
    css`
      &:after {
        content: "";
        width: ${({ size }) => (size ? `calc(${size} + 0.5rem)` : "4.5rem")};
        height: ${({ size }) => (size ? `calc(${size} + 0.5rem)` : "4.5rem")};
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        border-radius: 50%;
      }
    `}
`;
