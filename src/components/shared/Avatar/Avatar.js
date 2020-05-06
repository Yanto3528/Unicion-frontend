import React from "react";

import { AvatarContainer, AvatarStyle } from "./AvatarStyle";

const Avatar = ({ whiteBG, size, ...props }) => {
  return (
    <AvatarContainer whiteBG={whiteBG} size={size}>
      <AvatarStyle {...props} size={size} />
    </AvatarContainer>
  );
};

export default Avatar;
