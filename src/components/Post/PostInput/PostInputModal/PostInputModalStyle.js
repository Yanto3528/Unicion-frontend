import styled from "styled-components";
import { GreyButton } from "../../../shared/Button/ButtonStyle";
import Card from "../../../../styles/shared/Card";

export const PostInputModalContainer = styled.div`
  button {
    margin-top: 2rem;
  }
  padding: 2rem;
  ${GreyButton} {
    position: absolute;
    top: -0.5rem;
    right: 1rem;
  }
  ${Card} {
    padding: 0;
    margin-top: 10rem;
    max-width: 90%;
    width: 66.5rem;
  }
`;
