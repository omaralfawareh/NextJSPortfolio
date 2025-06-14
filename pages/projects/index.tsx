import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import Link from "next/link";

const Index = () => {
  const { i18n, t } = useTranslation("common");
  const align = i18n?.language === "ar" ? "text-right" : "text-left";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-12 sm:pt-16 lg:pt-20">
      {/* Header Section */}
      <div className={`${align} w-full max-w-4xl mb-12`}>
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4">
          {t("projects")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          {t("projects_page.subtitle")}
        </p>
      </div>

      {/* Main GitHub Card */}
      <div className="w-full max-w-2xl">
        <div className="relative group">
          {/* Background gradient */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

          {/* Main card */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* GitHub Icon */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-full">
                  <Github className="w-16 h-16 text-gray-800 dark:text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {t("projects_page.github_projects_title")}
                </h2>
              </div>

              {/* CTA Button */}
              <Link
                href="https://github.com/omaralfawareh"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center space-x-3">
                  <Github className="w-5 h-5 mx-1" />
                  <span>{t("projects_page.visit_github")}</span>
                  <BoxArrowUpRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </div>
          </div>
        </div>
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
