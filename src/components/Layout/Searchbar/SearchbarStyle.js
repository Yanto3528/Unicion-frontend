import styled, { css } from "styled-components";

export const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 2rem;
  font-family: "Montserrat", sans-serif;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.primaryLight};
  border: none;
  outline: none;
`;

export const SearchIconContainer = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-2rem, -50%);
  color: ${({ theme }) => theme.primary};
`;

export const SearchbarContainer = styled.div`
  width: 40%;
  height: 4rem;
  @media (max-width: 670px) {
    display: none;
    ${({ isDropdown }) =>
      isDropdown &&
      css`
        width: 100vw;
        height: 6rem;
        position: fixed;
        top: 6rem;
        left: 0;
        right: 0;
        padding: 1rem;
        background-color: white;
        box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: center;
        ${SearchForm} {
          width: 50%;
          height: 50%;
        }
        ${SearchIconContainer} {
          top: 2rem;
        }
      `}
  }
`;
