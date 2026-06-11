import React, { useState, useEffect, useRef } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Anchor, Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Intro } from "../components/intro";
import { Menus } from "../components/menus";
import { AboutMe } from "../components/aboutme";
import { ANCHOR } from "../i18n";
import { Experience } from "../components/experience";
import { Publications } from "../components/publications";
const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

export const LayoutMain = ({ i18n, setI18n }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const topRef = useRef(null);

  const [targetOffset, setTargetOffset] = useState();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={siderStyle} width={500} theme="light">
        <div
          style={{
            marginTop: 100,
            width: "100%",
            display: "flex",
            paddingRight: "15px",
          }}
        >
          <div style={{ marginLeft: "auto", textAlign: "center" }}>
            <Intro i18n={i18n} />
            <Menus />
          </div>
        </div>
      </Sider>
      <Layout
        style={{
          background: colorBgContainer,
          padding: 50,
        }}
      >
        <Header
          ref={topRef}
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            width: 800,
          }}
        >
          <Anchor
            direction="horizontal"
            targetOffset={targetOffset}
            items={[
              {
                key: "aboutme",
                href: "#aboutme",
                title: ANCHOR[i18n]["aboutme"],
              },
              {
                key: "experience",
                href: "#experience",
                title: ANCHOR[i18n]["experience"],
              },
              {
                key: "publications",
                href: "#publications",
                title: ANCHOR[i18n]["publications"],
              },
            ]}
          />
          <div style={{ marginLeft: "auto" }}>
            <Button
              type="text"
              onClick={() => {
                if (i18n === "zhCN") setI18n("en");
                else setI18n("zhCN");
              }}
            >
              {i18n === "zhCN" ? "English" : "中文"}
            </Button>
          </div>
        </Header>
        <Content
          style={{
            marginTop: 20,
            width: 800,
            overflow: "initial",
            background: colorBgContainer,
          }}
        >
          <div id="aboutme">
            <AboutMe i18n={i18n} />
          </div>
          <div id="experience">
            <Experience i18n={i18n} />
          </div>
          <div id="publications">
            <Publications i18n={i18n} />
          </div>
          {/* <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div> */}
        </Content>
      </Layout>
    </Layout>
  );
};
