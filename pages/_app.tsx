import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Menu, Layout } from "antd";
import { useRouter } from "next/router";
import { appWithTranslation, useTranslation } from "next-i18next";
import { FloatButton } from "antd";
import { GlobalOutlined, MoonOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

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
  const [selectedKey, setSelectedKey] = useState<string>("/");
  const router = useRouter();
  const { i18n, t } = useTranslation("common");

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  const handleChangeLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ar" : "en";
    const newUrl = `${window.location.origin}/${nextLanguage}/${router.pathname}`;
    window.location.href = newUrl;
  };

  const handleChangeTheme = () => {
    const body = document.body;

    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    const theme =
      window.localStorage["theme"] ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    document.body.classList.add(theme);
  }, []);

  useEffect(() => {
    setSelectedKey(router.pathname);
  }, [router.pathname]);

  return (
    <Layout className={`fixed w-screen h-screen`}>
      <FloatButton.Group>
        <FloatButton icon={<MoonOutlined />} onClick={handleChangeTheme} />
        <FloatButton icon={<GlobalOutlined />} onClick={handleChangeLanguage} />
      </FloatButton.Group>
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
        <div className="flex flex-col items-center justify-center w-screen h-full md:w-full p-5 bg-white dark:bg-black">
          <Menu
            className="bg-white dark:bg-black flex flex-col items-center justify-center w-full font-bold text-xl border-white dark:border-none"
            theme={"light"}
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={({ key }) => {
              router.push(key);
              setSelectedKey(key);
              window.innerWidth < 768 ? setCollapsed(true) : null;
            }}
            items={[
              {
                className: `group w-[11rem] ${
                  selectedKey === "/"
                    ? "dark:bg-[#111] text-black dark:text-white"
                    : "text-[#767676] dark:text-[#FFFFFFA6]"
                } dark:hover:text-white dark:focus:bg-[#111]`,
                label: (
                  <h3
                    className={`label group-hover:tracking-widest transition-[letter-spacing]`}
                  >
                    {t("home")}
                  </h3>
                ),
                key: "/",
                icon: <HomeOutlined className="text-xl" />,
              },
              {
                className: `group w-[11rem] ${
                  selectedKey === "/about"
                    ? "dark:bg-[#111] text-black dark:text-white"
                    : "text-[#767676] dark:text-[#FFFFFFA6]"
                } dark:hover:text-white dark:focus:bg-[#111]`,
                label: (
                  <h3
                    className={`label group-hover:tracking-widest transition-[letter-spacing]`}
                  >
                    {t("about")}
                  </h3>
                ),
                key: "/about",
                icon: <UserOutlined className="text-xl" />,
              },
              {
                className: `group w-[11rem] ${
                  selectedKey === "/projects"
                    ? "dark:bg-[#111] text-black dark:text-white"
                    : "text-[#767676] dark:text-[#FFFFFFA6]"
                } dark:hover:text-white dark:focus:bg-[#111]`,
                label: (
                  <h3
                    className={`label group-hover:tracking-widest transition-[letter-spacing]`}
                  >
                    {t("projects")}
                  </h3>
                ),
                key: "/projects",
                icon: <SettingOutlined className="text-xl" />,
              },
              {
                className: `group w-[11rem] ${
                  selectedKey === "/contact"
                    ? "dark:bg-[#111] text-black dark:text-white"
                    : "text-[#767676] dark:text-[#FFFFFFA6]"
                } dark:hover:text-white  dark:focus:bg-[#111]`,
                label: (
                  <h3
                    className={`label group-hover:tracking-widest transition-[letter-spacing]`}
                  >
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
          } flex-col min-h-screen justify-center items-center dark:bg-[#111] bg-[#f8f8f8] text-black dark:text-white overflow-y-auto ${
            collapsed ? "" : "hidden"
          } md:block`}
        >
          <motion.div
            initial={{ x: i18n.language === "ar" ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: i18n.language === "ar" ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.7 }}
            key={router.asPath}
          >
            <Component {...pageProps} />
          </motion.div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default appWithTranslation(App);
