import styled, { css } from "styled-components";

const successStyle = css`
  color: #22cb29;
  background-color: #e8f9f1;
`;
const dangerStyle = css`
  color: #ff0308;
  background-color: #faeeee;
`;

export const AlertContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  & > * {
    margin-right: 2rem;
  }
  ${({ type }) => {
    switch (type) {
      case "success":
        return successStyle;
      case "danger":
        return dangerStyle;
      default:
        return dangerStyle;
    }
  }}
`;
