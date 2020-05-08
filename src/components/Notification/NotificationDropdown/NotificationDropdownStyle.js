import styled from "styled-components";

export const NotificationAction = styled.button`
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const NotificationBody = styled.div`
  padding: 2rem;
  text-align: center;
`;
