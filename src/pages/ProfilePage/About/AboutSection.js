import React from "react";
import PropTypes from "prop-types";

import { AboutGroup, AboutGroupText, AboutGroupValue } from "./AboutStyle";

const AboutSection = ({ text, value, noCap }) => {
  return (
    <AboutGroup>
      <AboutGroupText>{text}</AboutGroupText>
      <AboutGroupValue noCap={noCap}>{value}</AboutGroupValue>
    </AboutGroup>
  );
};

AboutSection.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  noCap: PropTypes.bool,
};

export default AboutSection;
