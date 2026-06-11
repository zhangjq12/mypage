import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import { EXPERIENCE } from "../../i18n";

export const Experience = ({ i18n }) => {
  return <Markdown children={EXPERIENCE[i18n]} />;
};
