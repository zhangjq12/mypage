import React, { useState } from "react";
import { PUBLICATIONS } from "../../statics/publications";
import { PubCard } from "./card";

export const Publications = ({ i18n }) => {
  return (
    <div>
      <h1>{i18n === "zhCN" ? "发表文章" : "Publications"}</h1>
      {PUBLICATIONS.map((pubs, i) => {
        return (
          <PubCard
            key={`pub${i}`}
            pub={pubs.pub}
            names={pubs.names}
            title={pubs.title}
            image={pubs.image}
            links={pubs.links}
            pubAbbr={pubs.pubAbbr}
          />
        );
      })}
    </div>
  );
};
