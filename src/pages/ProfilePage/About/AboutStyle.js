import styled from "styled-components";

export const AboutGroupContainer = styled.div`
  margin-bottom: 4rem;
`;

export const AboutGroup = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const AboutGroupText = styled.p`
  font-weight: 500;
  width: 20rem;
  @media (max-width: 500px) {
    width: 8rem;
  }
`;

export const AboutGroupValue = styled.p`
  color: ${({ theme }) => theme.text};
  text-transform: ${({ noCap }) => (noCap ? "none" : "capitalize")};
  flex: 1;
`;
