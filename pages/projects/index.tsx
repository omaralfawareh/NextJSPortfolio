import React from "react";
import Project from "../../components/projects/Project";
import { imageType } from "../../components/projects/Project";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const index = () => {
  const projects: { text: string; link: string; src: imageType }[] = [
    {
      text: "A website made for subscription based business services. Coded in HTML and CSS.",
      link: "https://github.com/omaralfawareh/",
      src: "business",
    },
    {
      text: "A responsive website representing and describing a seminar held by a company.",
      link: "https://github.com/omaralfawareh/",
      src: "seminar",
    },
    {
      text: '"Delivery Dash" is a 2D delivery game developed in Unity using C#.',
      link: "https://github.com/omaralfawareh/",
      src: "unity",
    },
    {
      text: "Login Page made in React Js connected with Firebase.",
      link: "https://github.com/omaralfawareh/",
      src: "login",
    },
  ];
  return (
    <div className="flex flex-col gap-8 min-h-screen p-1 md:p-12  text-base max-h-screen">
      <h1 className="text-left font-medium text-4xl">Projects</h1>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-center w-full p-3">
        {projects.map(({ text, link, src }) => (
          <Project key={link} text={text} link={link} src={src} />
        ))}
      </div>
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: { locale: "ar" | "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
