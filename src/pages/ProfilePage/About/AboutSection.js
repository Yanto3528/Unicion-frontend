import React from "react";

import { AboutGroup, AboutGroupText, AboutGroupValue } from "./AboutStyle";

const AboutSection = ({ text, value, noCap }) => {
  return (
    <AboutGroup>
      <AboutGroupText>{text}</AboutGroupText>
      <AboutGroupValue noCap={noCap}>{value}</AboutGroupValue>
    </AboutGroup>
  );
};

export default AboutSection;
