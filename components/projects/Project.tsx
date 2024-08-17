import React from "react";
import Image from "next/image";
import Link from "next/link";
import Business from "../../public/assets/business.png";
import Seminar from "../../public/assets/seminar.png";
import Unity from "../../public/assets/unity.png";
import Login from "../../public/assets/login.png";
import { useTranslation } from "react-i18next";

const imageMap = {
  business: Business,
  seminar: Seminar,
  unity: Unity,
  login: Login,
};
export type imageType = "business" | "seminar" | "unity" | "login";

type ProjectTypes = {
  text: string;
  src: imageType;
  link: string;
};
const Project = ({ text, src, link }: ProjectTypes) => {
  const imageSrc = imageMap[src];
  const { i18n, t } = useTranslation("common");

  return (
    <div className="flex flex-col rounded-xl w-full overflow-hidden border border-black justify-between min-h-full items-center md:w-[35%] ">
      <div className="group">
        <Image
          priority={true}
          alt={src}
          src={imageSrc}
          className={`w-[600px] h-[250px] cursor-pointer transition-all duration-500  ${
            src === "unity" ? "object-scale-down" : "object-fill"
          } group-hover:contrast-[0.45]`}
          onClick={() => {
            window.open(link, "_blank");
          }}
        />
      </div>
      <div
        className={`flex flex-col ${
          i18n?.language == "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
        } justify-between items-center bg-black p-5 min-h-[30%] w-full transition-all duration-300 ease-in-out group-hover:scale-105`}
      >
        <p className="text-base mr-2">{text} Project</p>
        <div className="flex flex-col justify-center items-center bg-[#111] w-full lg:w-[200px] h-[35px] px-2 rounded">
          <Link
            className="text-center group-hover:tracking-widest group-hover:text-blue-300 transition-all"
            href={link}
          >
            GITHUB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
