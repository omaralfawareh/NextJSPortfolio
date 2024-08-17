import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Menu, Layout } from "antd";
import { useRouter } from "next/router";
import { appWithTranslation, useTranslation } from "next-i18next";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MailFilled,
} from "@ant-design/icons";
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const { Sider, Content } = Layout;

function App({ Component, pageProps }: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const { i18n, t } = useTranslation("common");

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={`fixed w-screen h-screen `}>
      <Sider
        className="fixed h-full"
        breakpoint="lg"
        collapsible
        onCollapse={toggleSider}
        collapsed={collapsed}
        collapsedWidth="0"
        width={450}
        zeroWidthTriggerStyle={
          collapsed
            ? { backgroundColor: "black" }
            : { backgroundColor: "black", display: "none" }
        }
      >
        <div className="flex flex-col items-center justify-center w-screen h-full md:w-full p-5 bg-black">
          <Menu
            className="bg-black flex flex-col items-center justify-center w-full font-bold text-xl"
            theme="dark"
            mode="inline"
            onClick={({ key }) => {
              router.push(key);
              window.innerWidth < 768 ? setCollapsed(true) : null;
            }}
            items={[
              {
                className:
                  "group w-[11rem] focus:bg-[#111] transition-all bg-black",
                label: (
                  <h3 className="label group-hover:tracking-widest transition-all">
                    {t("home")}
                  </h3>
                ),
                key: "/",
                icon: <HomeOutlined className="text-xl" />,
              },
              {
                className: "group w-[11rem] focus:bg-[#111] bg-black",
                label: (
                  <h3 className="label group-hover:tracking-widest transition-all">
                    {t("about")}
                  </h3>
                ),
                key: "/about",
                icon: <UserOutlined className="text-xl" />,
              },
              {
                className: "group w-[11rem] focus:bg-[#111] bg-black",
                label: (
                  <h3 className="label group-hover:tracking-widest transition-all">
                    {t("projects")}
                  </h3>
                ),
                key: "/projects",
                icon: <SettingOutlined className="text-xl" />,
              },
              {
                className: "group w-[11rem] focus:bg-[#111] bg-black",
                label: (
                  <h3 className="label group-hover:tracking-widest transition-all">
                    {t("contact")}
                  </h3>
                ),
                key: "/contact",
                icon: <MailFilled className="text-xl" />,
              },
            ]}
          />
        </div>
      </Sider>
      <Layout
        className={`${
          i18n.language == "en" ? "lg:ml-[450px]" : "lg:mr-[450px]"
        }`}
      >
        <Content
          className={`${
            montserrat.className
          } flex-col min-h-screen justify-center items-center bg-[#111] dark:text-white overflow-y-auto ${
            collapsed ? "" : "hidden"
          } md:block`}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default appWithTranslation(App);
