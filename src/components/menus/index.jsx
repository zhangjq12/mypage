import { GithubFilled, MailFilled, WechatFilled } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

export const Menus = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginTop: 10 }}>
        <Button
          type="default"
          icon={<MailFilled />}
          href="mailto:zhangjiaqian1@sxu.edu.cn"
          block
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          zhangjiaqian1@sxu.edu.cn
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button
          type="default"
          icon={<WechatFilled />}
          block
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          zjq532_kobe
        </Button>
      </div>
      {/* <div style={{ marginTop: 10 }}>
        <Button
          type="default"
          icon={<GithubFilled />}
          href="https://github.com/zhangjq12"
          block
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          zhangjq12
        </Button>
      </div> */}
    </div>
  );
};
