import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { Menu, Layout } from "antd";
import router from "next/router";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MailFilled,
} from "@ant-design/icons";
const { Sider, Content } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  const [collapsed, setCollapsed] = useState(false);
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider
        className="sider"
        breakpoint="lg"
        collapsible
        onCollapse={toggleSider}
        collapsed={collapsed}
        collapsedWidth="0"
        // width={window?.innerWidth < 768 ? "100vw" : 390}
        // trigger={<SidebarTrigger />}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            padding: "0",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Menu
              className="menu"
              theme="dark"
              mode="inline"
              onClick={({ key }) => {
                // router.push(key);
                // if (window.innerWidth < 768) toggleSider();
              }}
              items={[
                {
                  label: <h3 className="label">home</h3>,
                  key: "/",
                  icon: <HomeOutlined className="menuIcon" />,
                },
                {
                  label: <h3 className="label">about</h3>,
                  key: "/about",
                  icon: <UserOutlined className="menuIcon" />,
                },
                {
                  label: <h3 className="label">projects</h3>,
                  key: "/projects",
                  icon: <SettingOutlined className="menuIcon" />,
                },
                {
                  label: <h3 className="label">contact</h3>,
                  key: "/contact",
                  icon: <MailFilled className="menuIcon" />,
                },
              ]}
            ></Menu>
          </div>
        </div>
      </Sider>
      <Layout style={{ backgroundColor: "#36454f" }}>
        <Content
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#36454f",
            height: "100%",
            width: collapsed ? "100%" : "calc(100% - 390px)", //To Adjust the width based on Sider state
            marginLeft: collapsed ? 0 : 390, //To Adjust margin based on Sider state
            // transition:
            //   window.innerWidth >= 768 ? "width 0.8s, margin-left 0.8s" : "", //To Specify transitions for width and margin-left but non on mobile
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}
