import React from "react";
import PropTypes from "prop-types";

import { AvatarContainer, AvatarStyle } from "./AvatarStyle";

const Avatar = ({ whiteBG, size, ...props }) => {
  return (
    <AvatarContainer whiteBG={whiteBG} size={size}>
      <AvatarStyle {...props} size={size} />
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  whiteBG: PropTypes.bool,
  size: PropTypes.string,
};

export default Avatar;
