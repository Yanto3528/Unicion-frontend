import styled from "styled-components";

export const SearchbarContainer = styled.div`
  width: 55rem;
  height: 4rem;
`;

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
