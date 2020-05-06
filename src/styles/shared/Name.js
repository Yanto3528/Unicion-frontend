import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.heading};
  transition: all 0.4s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
