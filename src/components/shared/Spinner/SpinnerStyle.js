import styled, { css } from "styled-components";

const fullSizeStyle = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  justify-content: center;
  ${({ fullScreen }) =>
    fullScreen &&
    css`
      align-items: center;
      position: fixed;
      ${fullSizeStyle}
    `}
  ${({ transparent }) =>
    transparent &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
      position: absolute;
      ${fullSizeStyle}
    `}
`;
