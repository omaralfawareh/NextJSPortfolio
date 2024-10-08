import React from "react";
import Link from "next/link";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { i18n, t } = useTranslation("common");
  const align = i18n?.language === "ar" ? "md:text-right" : "md:text-left";

  return (
    <div className="flex flex-col gap-2 content-center justify-center p-12">
      <h1 className={`text-center ${align} font-medium text-6xl`}>
        {t("name")}
      </h1>
      <TypeAnimation
        className={`text-xl text-center ${align}`}
        sequence={[
          t("software_engineer"),
          1000,
          t("web_developer"),
          1000,
          t("mobile_developer"),
          1000,
          t("full_stack_developer"),
          1000,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
      />
      <p className={`text-center ${align} text-base text-[#bbb]`}>
        {t("description")}
      </p>
      <div className="flex flex-row gap-5 justify-center md:justify-start">
        <a
          className="text-2xl hover:scale-150 transition"
          href="https://www.linkedin.com/in/omaralfawareh/"
        >
          <LinkedinFilled />
        </a>
        <a
          className="text-2xl hover:scale-150 transition"
          href="https://github.com/omaralfawareh"
        >
          <GithubFilled />
        </a>
        <a
          className="text-2xl hover:scale-150 transition"
          href="https://www.instagram.com/omar_alfawareh/"
        >
          <InstagramFilled />
        </a>
        <a className="text-2xl hover:scale-150 transition" href="/404">
          <FacebookFilled />
        </a>
      </div>
      <Link
        href="/about"
        className="text-base bg-black px-5 py-2 w-full md:w-1/3 rounded-l mt-2 text-white text-center md:hidden"
      >
        {t("about_me")}
      </Link>
    </div>
  );
};

export default Home;
