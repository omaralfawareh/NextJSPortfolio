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
  const [collapsed, setCollapsed] = useState(false);
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="fixed w-screen">
      <Sider
        className="h-screen"
        breakpoint="lg"
        collapsible
        onCollapse={toggleSider}
        collapsed={collapsed}
        collapsedWidth="0"
        width={350}
        zeroWidthTriggerStyle={
          collapsed
            ? { backgroundColor: "black" }
            : { backgroundColor: "black", display: "none" }
        }
      >
        <div className="flex flex-col items-center justify-center w-screen h-full md:w-full p-5 bg-black">
          <Menu
            className="bg-black flex flex-col items-center justify-center w-1/3 md:w-1/2"
            theme="dark"
            mode="inline"
            onClick={({ key }) => {
              router.push(key);
              window.innerWidth < 768 ? setCollapsed(true) : null;
            }}
            items={[
              {
                label: <h3 className="label">home</h3>,
                key: "/",
                icon: <HomeOutlined className="" />,
              },
              {
                label: <h3 className="label">about</h3>,
                key: "/about",
                icon: <UserOutlined className="" />,
              },
              {
                label: <h3 className="label">projects</h3>,
                key: "/projects",
                icon: <SettingOutlined className="" />,
              },
              {
                label: <h3 className="label">contact</h3>,
                key: "/contact",
                icon: <MailFilled className="" />,
              },
            ]}
          />
        </div>
      </Sider>
      <Layout>
        <Content
          className={`flex-col min-h-screen justify-center items-center bg-[#111] dark:text-white ${
            collapsed ? "" : "hidden"
          } md:block`}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}
