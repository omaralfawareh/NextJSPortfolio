import React from "react";
import Project from "../../components/projects/Project";
import { imageType } from "../../components/projects/Project";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { i18n, t } = useTranslation("common");
  const align = i18n?.language === "ar" ? "text-right" : "text-left";

  const projects: { text: string; link: string; src: imageType }[] = [
    {
      text: t("projects_descriptions.business"),
      link: "https://github.com/omaralfawareh/",
      src: "business",
    },
    {
      text: t("projects_descriptions.seminar"),
      link: "https://github.com/omaralfawareh/",
      src: "seminar",
    },
    {
      text: t("projects_descriptions.unity"),
      link: "https://github.com/omaralfawareh/",
      src: "unity",
    },
    {
      text: t("projects_descriptions.login"),
      link: "https://github.com/omaralfawareh/",
      src: "login",
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-1 pt-12 sm:pt-16 lg:pt-20 md:p-12 text-base min-h-screen">
      <h1
        className={`${align} font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white`}
      >
        {t("projects")}
      </h1>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-center w-full p-3">
        {projects.map(({ text, link, src }) => (
          <Project key={link} text={text} link={link} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Index;

export async function getStaticProps({ locale }: { locale: "ar" | "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
