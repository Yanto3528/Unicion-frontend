import styled, { css } from "styled-components";

const InputStyle = css`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.line};
  outline: none;
  font-family: "Montserrat", sans-serif;
  transition: all 0.4s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const Input = styled.input`
  ${InputStyle};
  padding: 1rem 2rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 0.5rem;
  outline: none;
`;

export const Select = styled.select`
  ${InputStyle};
  padding: 1rem;
  font-weight: 500;
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.heading};
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
  select {
    ${InputStyle}
    padding: 1rem;
    font-weight: 500;
  }
  .calender-picker {
    transform: scale(1.5) translate(2rem, 2rem);
  }
  .react-datepicker-wrapper {
    width: 100%;
    .react-datepicker__input-container {
      width: 100%;
      input {
        padding: 1rem 2rem;
        ${InputStyle}
      }
    }
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

export const InputParentContainer = styled.div`
  display: flex;
  align-items: center;
`;
