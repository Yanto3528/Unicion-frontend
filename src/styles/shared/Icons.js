import styled, { keyframes } from "styled-components";
import { News } from "@styled-icons/boxicons-regular/News";
import { PersonOutline } from "@styled-icons/evaicons-outline/PersonOutline";
import { PeopleOutline } from "@styled-icons/evaicons-outline/PeopleOutline";
import { UserReceived } from "@styled-icons/remix-line/UserReceived";
import { Chat3 } from "@styled-icons/remix-line/Chat3";
import { People } from "@styled-icons/evaicons-solid/People";
import { Bell } from "@styled-icons/boxicons-solid/Bell";
import { ChevronDown } from "@styled-icons/boxicons-solid/ChevronDown";
import { HeartCircle } from "@styled-icons/boxicons-solid/HeartCircle";
import { EllipsisH } from "@styled-icons/fa-solid/EllipsisH";
import { Edit } from "@styled-icons/boxicons-solid/Edit";
import { Trash } from "@styled-icons/boxicons-regular/Trash";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";
import { Check } from "@styled-icons/fa-solid/Check";
import { CheckCircle } from "@styled-icons/boxicons-solid/CheckCircle";
import { CloseCircle } from "@styled-icons/evaicons-solid/CloseCircle";
import { Image } from "@styled-icons/boxicons-regular/Image";

import { Spinner3 } from "@styled-icons/evil/Spinner3";

const sidebarIconStyle = (icon) => {
  return styled(icon)`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2rem;
    color: inherit;
  `;
};

const sharedIconStyle = (icon, width = "2.4rem", height = "2.4rem") => {
  return styled(icon)`
    color: ${({ theme }) => theme.primary};
    width: ${width};
    height: ${height};
    cursor: pointer;
  `;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

// Icons for Navbar
export const PeopleIcon = sharedIconStyle(People);
export const BellIcon = sharedIconStyle(Bell);
export const ChevronDownIcon = sharedIconStyle(ChevronDown);
export const SearchIcon = sharedIconStyle(SearchAlt2);
export const ImageIcon = sharedIconStyle(Image);

// Icons for Sidebar
export const NewsIcon = sidebarIconStyle(News);
export const PersonOutlineIcon = sidebarIconStyle(PersonOutline);
export const PeopleOutlineIcon = sidebarIconStyle(PeopleOutline);
export const UserReceivedIcon = sidebarIconStyle(UserReceived);
export const ChatIcon = sidebarIconStyle(Chat3);
export const EditIcon = sidebarIconStyle(Edit);
export const TrashIcon = sidebarIconStyle(Trash);
export const CheckCircleIcon = sidebarIconStyle(CheckCircle);
export const CloseCircleIcon = sidebarIconStyle(CloseCircle);

export const HeartIcon = styled(sharedIconStyle(HeartCircle))`
  color: ${({ theme }) => theme.secondaryBright};
  cursor: auto;
`;

export const EllipsisIcon = styled(sharedIconStyle(EllipsisH))`
  color: inherit;
`;

export const CheckIcon = styled(sharedIconStyle(Check, "1.6rem", "1.6rem"))`
  color: white;
`;

export const SpinnerIcon = styled(Spinner3)`
  animation: ${rotate} 1s infinite;
  width: ${({ size }) => (size ? size : "8rem")};
  height: ${({ size }) => (size ? size : "8rem")};
`;
