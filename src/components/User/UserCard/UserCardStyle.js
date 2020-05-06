import styled from "styled-components";
import Card from "../../../styles/shared/Card";
import { AvatarContainer } from "../../shared/Avatar/AvatarStyle";
import { GreyButton } from "../../shared/Button/ButtonStyle";
import { CheckIcon } from "../../../styles/shared/Icons";

export const UserCardContainer = styled(Card)`
  padding: 0;
  ${GreyButton} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${CheckIcon} {
    margin-right: 0.5rem;
  }
`;

export const UserCardCoverPhoto = styled.div`
  width: 100%;
  height: 10rem;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding-left: 2rem;
  margin-bottom: 1rem;
  ${AvatarContainer} {
    transform: translateY(2rem);
  }
`;

export const UserCardDetailsContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
