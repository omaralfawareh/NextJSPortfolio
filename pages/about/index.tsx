import React from "react";
import { Timeline } from "antd";
import Link from "next/link";
import Image from "next/image";
import { i18n, useTranslation } from "next-i18next";
import ReactLogo from "../../public/assets/react.png";
import JavaLogo from "../../public/assets/java.png";
import CppLogo from "../../public/assets/cpp.png";
import CssLogo from "../../public/assets/css.png";
import HtmlLogo from "../../public/assets/html.png";
import CsharpLogo from "../../public/assets/csharp.png";
import UnityLogo from "../../public/assets/unity.png";
import BootstrapLogo from "../../public/assets/bootstrap.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const calculateAge = (birthday: string) => {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

function About() {
  const { t } = useTranslation("common");
  const age = calculateAge("2002-04-17");
  const align = i18n?.language === "ar" ? "text-right" : "text-left";

  const skills = [
    { src: ReactLogo, alt: t("react") },
    { src: JavaLogo, alt: t("java") },
    { src: CppLogo, alt: t("cpp") },
    { src: CssLogo, alt: t("css") },
    { src: HtmlLogo, alt: t("html") },
    { src: CsharpLogo, alt: t("csharp") },
    { src: UnityLogo, alt: t("unity") },
    { src: BootstrapLogo, alt: t("bootstrap") },
  ];

  return (
    <div className="flex flex-col gap-8 justify-center p-12 text-base">
      <h1 className={`${align} font-medium text-4xl rtl:text-red-500`}>
        {t("about_me")}
      </h1>
      <h2 className={`${align} text-2xl`}>{t("name")}</h2>
      <p className={`${align} text-left text-xl text-[#bbb]`}>
        {t("profession")}
      </p>
      <hr />
      <div className="flex flex-col gap-4">
        <p>{t("intro_part_1")}</p>
        <p>{t("intro_part_2")}</p>
      </div>
      <hr />
      <ul className="w-full">
        <li>
          <span className="inline-block w-28">{t("birthday")} :</span>
          <span>17/04/2002</span>
        </li>
        <li className="w-full">
          <span className="inline-block w-28">{t("age")} :</span>
          <span>{age}</span>
        </li>
        <li>
          <span className="inline-block w-28">{t("address")} :</span>
          <span>{t("address_value")}</span>
        </li>
        <li>
          <span className="inline-block w-28">{t("email")} :</span>
          <span>
            <a href="mailto:alfawareho@gmail.com">alfawareho@gmail.com</a>
          </span>
        </li>
        <li>
          <span className="inline-block w-28">{t("phone")} :</span>
          <span>
            <a href="tel:+962791141046">+962791141046</a>
          </span>
        </li>
      </ul>
      <Link
        href="/assets/Resume.pdf"
        target="_blank"
        className="text-base bg-black px-5 py-2 w-full md:w-1/3 rounded-l mt-2 hover:text-white text-center "
      >
        {t("resume")}
      </Link>
      <h2 className={`${align} text-left text-2xl`}>{t("skills")}</h2>
      <hr />
      <div className="flex justify-between flex-wrap">
        {skills.map((skill) => (
          <Image
            alt={skill.alt}
            key={skill.alt}
            src={skill.src}
            width={100}
            height={100}
          />
        ))}
      </div>
      <hr />
      <div className="flex justify-center">
        <div className="flex flex-col gap-2 w-full">
          <h2 className={`${align} text-left text-2xl m-1`}>
            {t("experience")}
          </h2>
          <Timeline
            mode={i18n?.language === "ar" ? "right" : "left"}
            items={[
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">Shahid, MBC Group</p>
                    <span className="text-[#bbb] text-base">
                      {t("associate_software_engineer")}
                    </span>
                  </div>
                ),
                color: "black",
              },
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">Eduhax</p>
                    <span className="text-[#bbb] text-base">
                      {t("web_developer_intern")}
                    </span>
                  </div>
                ),
                color: "black",
              },
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">Orange Jordan</p>
                    <span className="text-[#bbb] text-base">
                      {t("full_stack_developer_intern")}
                    </span>
                  </div>
                ),
                color: "black",
              },
            ]}
          />
        </div>
        <div className="w-full flex gap-2 m-1 flex-col">
          <h2 className={`${align} text-left text-2xl m-1`}>
            {t("education")}
          </h2>
          <Timeline
            mode={i18n?.language === "ar" ? "right" : "left"}
            items={[
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">
                      {t("princess_sumaya_university")}
                    </p>
                    <span className="text-[#bbb] text-base">
                      {t("software_engineering")}
                    </span>
                  </div>
                ),
                color: "black",
              },
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">
                      {t("al_ittihad_international_schools")}
                    </p>
                    <span className="text-[#bbb] text-base">
                      {t("student")}
                    </span>
                  </div>
                ),
                color: "black",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

export async function getStaticProps({ locale }: { locale: "ar" | "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
