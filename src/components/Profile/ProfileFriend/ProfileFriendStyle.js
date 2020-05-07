import styled from "styled-components";
import Card from "../../../styles/shared/Card";
import { GreyButton } from "../../shared/Button/ButtonStyle";
import { CheckIcon } from "../../../styles/shared/Icons";

export const ProfileFriendCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  padding-right: 1rem;
  ${GreyButton} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${CheckIcon} {
    margin-right: 0.5rem;
  }
`;

export const ProfileFriendDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileFriendAvatar = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  width: 15rem;
  height: 15rem;
  margin-right: 2rem;
`;
