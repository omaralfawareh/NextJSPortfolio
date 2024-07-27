import React from "react";
import Project from "../../components/projects/Project";
import { imageType } from "../../components/projects/Project";
const index = () => {
  const projects: { text: string; link: string; src: imageType }[] = [
    {
      text: "A website made for subscription based business services. Coded in HTML and CSS.",
      link: "https://github.com/omaralfawareh/",
      src: "business",
    },
    {
      text: "Bussiness",
      link: "https://github.com/omaralfawareh/",
      src: "seminar",
    },
    {
      text: "Bussiness",
      link: "https://github.com/omaralfawareh/",
      src: "unity",
    },
    {
      text: "Bussiness",
      link: "https://github.com/omaralfawareh/",
      src: "login",
    },
  ];
  return (
    <div className="flex flex-col gap-8 min-h-screen p-12 text-base">
      <h1 className="text-left font-medium text-4xl">Projects</h1>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-center w-full ">
        {projects.map(({ text, link, src }) => (
          <Project key={link} text={text} link={link} src={src} />
        ))}
      </div>
    </div>
  );
};

export default index;
