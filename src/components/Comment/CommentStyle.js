import styled, { css } from "styled-components";
import { ChevronDownIcon } from "../../styles/shared/Icons";

export const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const CommentHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${ChevronDownIcon} {
    color: inherit;
  }
`;

export const CommentDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
  p {
    margin-bottom: 0.5rem;
  }
`;

export const CommentFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentAction = styled.span`
  display: inline-block;
  margin-right: 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.6rem;
  cursor: pointer;
  ${({ unlike }) =>
    unlike &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}
`;

export const CommentDate = styled.span`
  display: inline-block;
  font-size: 1.4rem;
`;
