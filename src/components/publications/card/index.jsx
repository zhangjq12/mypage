import { Badge, Button, Image } from "antd";
import Markdown from "markdown-to-jsx";
import React, { useState } from "react";

export const PubCard = ({ pub, title, names, pubAbbr, links, image }) => {
  return (
    <div style={{ display: "flex", margin: 15 }}>
      <div style={{ width: 200, margin: 15 }}>
        <Badge.Ribbon
          text={pubAbbr}
          styles={() => {
            return {
              indicator: {
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              },
              content: {
                fontWeight: "bold",
              },
            };
          }}
          color="blue"
        >
          <img src={`${process.env.PUBLIC_URL}${image}`} width={200} height={150} />
        </Badge.Ribbon>
      </div>
      <div style={{ margin: 15 }}>
        <a href={links["pdf"]}>
          <strong>{title}</strong>
        </a>
        <div style={{ marginTop: 5 }}>
          <Markdown children={names}></Markdown>
        </div>
        <div style={{ marginTop: 5 }}>
          <Markdown children={pub}></Markdown>
        </div>

        <div style={{ display: "flex", marginTop: 5 }}>
          {Object.keys(links).map((key, i) => {
            return (
              <Button
                key={`links${i}`}
                type="default"
                size="small"
                href={links[key]}
              >
                {key}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
