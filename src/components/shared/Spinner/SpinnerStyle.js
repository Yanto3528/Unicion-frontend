import styled, { css } from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `}
  ${({ fullScreen }) =>
    fullScreen &&
    css`
      width: 100vw;
      height: 100vh;
      align-items: center;
    `}
`;
