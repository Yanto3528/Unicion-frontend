import styled from "styled-components";
import { AvatarContainer } from "../../shared/Avatar/AvatarStyle";

export const ProfileHeaderContainer = styled.div`
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileCoverPhoto = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2rem;
  ${AvatarContainer} {
    transform: translateY(2.5rem);
  }
`;

export const ProfileHeaderUploadContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
