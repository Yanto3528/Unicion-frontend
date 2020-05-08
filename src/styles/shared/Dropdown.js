import styled, { keyframes } from "styled-components";

const slideDownIn = keyframes`
  from {
    transform: translateY(90%);
    opacity: 0;
  }
  to {
    transform: translateY(100%);
    opacity: 1;
  }
`;

export default styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${({ width }) => width};
  max-height: 40rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  transform: translateY(100%);
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.15);
  animation: ${slideDownIn} 0.5s;
`;

export const DropdownOption = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

export const DropdownTitle = styled.h4`
  text-transform: uppercase;
`;
