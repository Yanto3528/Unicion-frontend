import styled, { css } from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
  ${({ whiteBG }) =>
    whiteBG &&
    css`
      width: ${({ size }) => (size ? `calc(${size} + 1rem)` : "4.5rem")};
      height: ${({ size }) => (size ? `calc(${size} + 1rem)` : "4.5rem")};
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    `}
`;

export const AvatarStyle = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: ${({ size }) => (size ? size : "4rem")};
  height: ${({ size }) => (size ? size : "4rem")};
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
`;
