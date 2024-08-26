import React, { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { GlobalOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const FloatButtons = () => {
  const router = useRouter();
  const { i18n } = useTranslation("common");
  const [theme, setTheme] = useState("light");
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
      setTheme("light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  useEffect(() => {
    const theme =
      window.localStorage["theme"] ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.body.classList.add(theme);
    setTheme(theme);
  }, []);

  return (
    <FloatButton.Group>
      <FloatButton
        icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
        onClick={handleChangeTheme}
      />
      <FloatButton icon={<GlobalOutlined />} onClick={handleChangeLanguage} />
    </FloatButton.Group>
  );
};

export default FloatButtons;
