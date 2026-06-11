import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import { ABOUTME } from "../../i18n";

export const AboutMe = ({ i18n }) => {
  return <Markdown children={ABOUTME[i18n]} />;
};
