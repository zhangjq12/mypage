import { Avatar } from "antd";
import React, { useState } from "react";
import { INTRO } from "../../i18n";

export const Intro = ({ i18n }) => {
  return (
    <>
      <Avatar size={120} src={`${process.env.PUBLIC_URL}/avatar.jpg`} />
      <h1>{INTRO[i18n]["name"]}</h1>
      <p>{INTRO[i18n]["degree"]}</p>
      <p>{INTRO[i18n]["school"]}</p>
    </>
  );
};
