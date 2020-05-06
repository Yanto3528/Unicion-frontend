import styled, { css } from "styled-components";

export const PostInputForm = styled.form`
  padding: ${({ padding }) => (padding ? padding : "2rem 0")};
  ${({ modalPadding }) =>
    modalPadding &&
    css`
      padding: 2rem;
      ${PostInputGroup} {
        span {
          left: 0;
        }
      }
      ${PostTextarea} {
        padding-left: 6rem;
      }
    `}
`;

export const PostInputGroup = styled.div`
  width: 100%;
  position: relative;
  span {
    position: absolute;
    top: 0;
    left: 2rem;
  }
`;

export const PostTextarea = styled.textarea`
  height: ${({ height }) => (height ? height : "10rem")};
  width: 100%;
  font-family: "Montserrat", sans-serif;
  /* padding-left: 8rem; */
  padding: 1rem 0 1rem 8rem;
  border: none;
  resize: none;
  outline: none;
  transition: all 0.4s;
`;
