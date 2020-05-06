import styled from "styled-components";
import { ChevronDownIcon } from "../../../styles/shared/Icons";

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const PostTitle = styled.div`
  width: 100%;
  margin-left: 1rem;
  flex: 1;
`;

export const PostNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  h3 {
    font-size: 1.8rem;
  }
  ${ChevronDownIcon} {
    color: inherit;
  }
`;

export const PostDate = styled.p`
  font-weight: 300;
`;

export const PostBody = styled.div`
  padding-bottom: 1rem;
`;

export const PostImage = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 40rem;
  border-radius: 1rem;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
`;
