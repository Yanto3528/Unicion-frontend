import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.line};
  padding: ${({ pd }) => pd};
  margin-bottom: ${({ mb }) => (mb ? mb : "1rem")};
  h1 {
    font-size: ${({ size }) => {
      switch (size) {
        case "sm":
          return "2rem";
        case "lg":
          return "4rem";
        default:
          return "3rem";
      }
    }};
  }
  ${({ nb }) =>
    nb &&
    css`
      border-bottom: none;
      padding-bottom: 0;
    `}
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;
