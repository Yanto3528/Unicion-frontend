import styled from "styled-components";

export const CommentInputForm = styled.form`
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  button {
    align-self: flex-end;
    height: 3.7rem;
  }
  span {
    width: 3.7rem;
    height: 3.7rem;
  }
`;

export const CommentInput = styled.textarea`
  flex: 1;
  width: 100%;
  padding: 1rem;
  margin: 0 1rem;
  resize: none;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.line};
  outline: none;
  transition: all 0.4s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;
