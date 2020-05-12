import styled, { css } from "styled-components";

export default styled.div`
  position: relative;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15);
  padding: ${({ pd }) => (pd ? pd : "2rem")};
  margin: ${({ mg }) => mg};
  margin-bottom: ${({ mb }) => mb};
  margin-top: ${({ mt }) => mt};
  width: ${({ width }) => width};
  overflow: hidden;
  ${({ noHidden }) =>
    noHidden &&
    css`
      overflow: visible;
    `}
  ${({ main }) =>
    main &&
    css`
      width: 50rem;
      @media (max-width: 1000px) {
        margin: 0 auto;
      }
    `}
`;
