import styled, { css } from "styled-components";
import { EditImageIcon } from "../../../styles/shared/Icons";

const roundedIconStyle = css`
  width: ${({ size }) => `calc(${size} + 2rem)`};
  height: ${({ size }) => `calc(${size} + 2rem)`};
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15);
`;

export const InputFileContainer = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  padding: ${({ padding }) => padding};
  ${({ roundedIcon }) => roundedIcon && roundedIconStyle}
  ${EditImageIcon} {
    font-size: ${({ size }) => size};
    color: ${({ theme }) => theme.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;

export const UploadIconContainer = styled.span`
  display: inline-block;
`;
