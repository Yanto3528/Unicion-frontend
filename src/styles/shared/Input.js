import styled, { css } from "styled-components";

const InputStyle = css`
  width: 100%;
  border-radius: 0.5rem;
  outline: none;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  ${InputStyle};
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.line};
  transition: all 0.4s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const Select = styled.select`
  ${InputStyle};
  padding: 1rem;
  font-weight: 500;
`;

export const Option = styled.option`
  padding: 1rem;
`;

export const InputContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  label {
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.heading};
  }
  ${({ half }) =>
    half &&
    css`
      display: inline-block;
      width: calc((100% - 2rem) / 2);
      :nth-child(odd) {
        margin-right: 2rem;
      }
    `}
`;
