import styled from "styled-components";

export const PostSocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const PostSocialIcon = styled.span`
  display: flex;
  align-items: center;
  :first-child {
    margin-right: 2rem;
  }
`;

export const PostSocialIconText = styled.span`
  font-size: inherit;
`;

export const PostSocialActionContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.line};
  border-top: 1px solid ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostSocialAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 1rem 0;
  background-color: white;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
