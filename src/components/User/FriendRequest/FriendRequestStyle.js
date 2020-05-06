import styled from "styled-components";
import { ButtonContainer } from "../../shared/Button/ButtonStyle";

export const FriendRequestContainer = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FriendRequestDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FriendRequestChildContainer = styled.div`
  display: flex;
  align-items: center;
  ${FriendRequestDetails}, ${ButtonContainer} {
    margin-left: 1rem;
  }
`;
