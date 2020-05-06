import styled from "styled-components";

export const CommentEditForm = styled.form`
  width: 100%;
  button {
    margin-right: 2rem;
  }
`;

export const CommentEditInput = styled.textarea`
  width: 100%;
  resize: none;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 0.5rem;
  outline: none;
`;
