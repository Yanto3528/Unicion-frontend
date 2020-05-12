import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.4rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.4;
    color: ${({ theme }) => theme.heading};
    background-color: ${({ theme }) => theme.background};
  }
  a {
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
  }
  ul {
    list-style: none;
  }
  h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.heading};
    font-weight: 500;
  }
  textarea {
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 575px) {
    body {
      font-size: 1.2rem;
    }
    button {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 400px) {
    body {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyle;
