import React, { useEffect } from "react";
import Timeline from "@/components/ui/timeline";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
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
  const { i18n, t } = useTranslation("common");
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
    <div className="min-h-screen px-4 py-6 pt-12 sm:px-6 sm:pt-16 lg:px-12 lg:pt-20 max-w-7xl mx-auto">
      <div className="space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <h1
            className={`${align} font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white`}
          >
            {t("about_me")}
          </h1>
          <h2
            className={`${align} text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300`}
          >
            {t("name")}
          </h2>
          <p
            className={`${align} text-lg sm:text-xl text-gray-500 dark:text-gray-400`}
          >
            {t("profession")}
          </p>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Introduction */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t("intro_part_1")}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t("intro_part_2")}
          </p>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Personal Info */}
        <div className="space-y-4">
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:min-w-[120px]">
                {t("birthday")} :
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                17/04/2002
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:min-w-[120px]">
                {t("age")} :
              </span>
              <span className="text-gray-700 dark:text-gray-300">{age}</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:min-w-[120px]">
                {t("address")} :
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {t("address_value")}
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:min-w-[120px]">
                {t("email")} :
              </span>
              <a
                href="mailto:alfawareho@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                alfawareho@gmail.com
              </a>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:min-w-[120px]">
                {t("phone")} :
              </span>
              <a
                href="tel:+962791141046"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                00962791141046
              </a>
            </li>
          </ul>

          <Link
            href="/assets/Resume.pdf"
            target="_blank"
            locale="en"
            className="inline-block w-full sm:w-auto text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("resume")}
          </Link>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Skills Section */}
        <div className="space-y-6">
          <h2
            className={`${align} text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white`}
          >
            {t("skills")}
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.alt}
                className="flex flex-col items-center p-3 rounded-lg bg-white dark:bg-[#111] shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  alt={skill.alt}
                  src={skill.src}
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                />
                <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                  {skill.alt}
                </span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Experience and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience */}
          <div className="space-y-6">
            <h2
              className={`${align} text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white`}
            >
              {t("experience")}
            </h2>
            <Timeline
              items={[
                {
                  children: (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        Shahid, MBC Group
                      </p>
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        {t("associate_software_engineer")}
                      </span>
                    </div>
                  ),
                  color: "black",
                },
                {
                  children: (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        Eduhax
                      </p>
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        {t("web_developer_intern")}
                      </span>
                    </div>
                  ),
                  color: "black",
                },
                {
                  children: (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        Orange Jordan
                      </p>
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        {t("full_stack_developer_intern")}
                      </span>
                    </div>
                  ),
                  color: "black",
                },
              ]}
            />
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2
              className={`${align} text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white`}
            >
              {t("education")}
            </h2>
            <Timeline
              items={[
                {
                  children: (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {t("princess_sumaya_university")}
                      </p>
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        {t("software_engineering")}
                      </span>
                    </div>
                  ),
                  color: "black",
                },
                {
                  children: (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {t("al_ittihad_international_schools")}
                      </p>
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
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
