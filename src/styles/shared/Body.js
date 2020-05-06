import styled, { css } from "styled-components";

export default styled.p`
  white-space: pre-wrap;
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;
