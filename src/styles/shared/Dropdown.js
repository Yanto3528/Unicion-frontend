import styled from "styled-components";

export default styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.15);
`;

export const DropdownOption = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
  font-weight: 500;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.primary};
  }
`;
