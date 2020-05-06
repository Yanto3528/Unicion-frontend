import styled from "styled-components";
import { GreyButton } from "../../../shared/Button/ButtonStyle";

export const PostInputModalContainer = styled.div`
  button {
    margin-top: 2rem;
  }
  ${GreyButton} {
    position: absolute;
    top: -0.5rem;
    right: 1rem;
  }
`;
