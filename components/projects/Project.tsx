import React from "react";
import Image from "next/image";
import Link from "next/link";
import Business from "../../assets/business.png";
import Seminar from "../../assets/seminar.png";
import Unity from "../../assets/unity.png";
import Login from "../../assets/login.png";

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
  return (
    <div className="flex flex-col border  rounded-2xl overflow-hidden shadow-md shadow-white justify-between items-center md:w-[40%]">
      <Image alt={src} src={imageSrc} />
      <div className="flex justify-between items-center bg-black p-5 py-2 w-full">
        <p className="text-base">{text} Project</p>
        <div className="flex flex-col justify-between items-center bg-[#111] w-20 h-full">
          <Link href={link}>GITHUB</Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
