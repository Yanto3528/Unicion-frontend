import styled from "styled-components";
import { CloseCircleIcon } from "../../styles/shared/Icons";

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
