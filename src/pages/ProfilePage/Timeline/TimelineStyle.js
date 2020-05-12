import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2rem;
  align-items: flex-start;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
