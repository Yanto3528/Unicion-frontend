import styled from "styled-components";

export default styled.div`
  max-width: 90%;
  width: 50rem;
  padding: 2rem 0;
`;

export const AuthFormContainer = styled.form`
  margin-bottom: 1rem;
`;

export const AuthFooter = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.heading};
  a {
    color: ${({ theme }) => theme.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;
