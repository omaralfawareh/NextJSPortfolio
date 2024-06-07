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
    <Layout>
      <Sider
        className="sider bg-white"
        breakpoint="lg"
        collapsible
        onCollapse={toggleSider}
        collapsed={collapsed}
        collapsedWidth="0"
        width={390}
        // trigger={<SidebarTrigger />} //for a custom sidebar trigger
      >
        <div className="flex flex-row items-center justify-center h-full p-0 dark:bg-black dark:text-white">
          <div className="flex flex-col items-center justify-center w-full">
            <Menu
              className="menu dark:bg-black"
              theme="dark"
              mode="inline"
              onClick={({ key }) => {
                router.push(key);
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
        </div>
      </Sider>
      <Layout>
        <Content className="flex-col justify-center items-center h-full bg-[#36454f] dark:text-white">
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}
