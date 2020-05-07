import styled from "styled-components";
import { CloseCircleIcon } from "../../styles/shared/Icons";

export const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

export const NotificationTitle = styled.h4`
  text-transform: uppercase;
`;

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

export const NotificationItem = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${CloseCircleIcon} {
    margin: 0;
  }
`;

export const NotificationItemDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const NotificationDate = styled.p`
  font-size: 1.2rem;
`;
