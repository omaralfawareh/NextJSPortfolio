import React, { useState } from "react";
import { message as Message } from "antd";
import type { contactDataType } from "../api/contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Index: React.FC = () => {
  const { t } = useTranslation("common");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState("");

  const handleMessage = async () => {
    if (name === "") {
      Message.error(t("contact_page.errorName"));
      return;
    }
    if (!validateEmail(email)) {
      Message.error(t("contact_page.errorEmail"));
      return;
    }
    if (message === "") {
      Message.error(t("contact_page.errorMessage"));
      return;
    }
    const data: contactDataType = { name, email, message };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const resultData = await response.json();
      Message.success(resultData.message);
    } catch (e) {
      const error = e as Error;
      Message.error(error.message);
    }
  };

  const validateEmail = (email: String) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div
      className={`flex flex-col h-screen w-screen gap-20 justify-center items-center p-6 md:w-full`}
    >
      <h1 className="text-center text-6xl md:text-left font-medium ">
        {t("contact_page.title", "Get in Touch")}
      </h1>
      <div className="flex flex-col justify-center items-center gap-10 h-1/2 w-full md:w-1/2 bg-black py-10 px-0 rounded-2xl shadow-2xl shadow-white">
        <input
          className="bg-[#111] rounded px-5 py-2 h-1/4 w-[90%] md:w-[80%] focus-visible:outline-white"
          type="text"
          placeholder={t("contact_page.namePlaceholder")}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="w-[90%] md:w-[80%]">
          <input
            className={`bg-[#111] rounded px-5 py-2  w-full focus-visible:outline-white mb-1 ${
              !isValidEmail ? "border border-red-500" : ""
            }`}
            type="text"
            placeholder={t("contact_page.emailPlaceholder")}
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValidEmail(validateEmail(e.target.value));
            }}
          />
          {!isValidEmail ? (
            email !== "" ? (
              <p className="text-red-500 w-[90%] md:w-[80%]">
                {t("contact_page.errorEmail")}
              </p>
            ) : (
              <p className="text-red-500">{t("contact_page.errorEmail")}</p>
            )
          ) : null}
        </div>
        <textarea
          className="bg-[#111] rounded px-5 py-2 h-full w-[90%] md:w-[80%] focus-visible:outline-white"
          placeholder={t("contact_page.messagePlaceholder")}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleMessage}
          className="text-base bg-[#111] px-5 py-2 w-[90%] md:w-[80%] rounded mt-2 hover:text-white text-center "
        >
          {t("contact_page.sendMessageButton")}
        </button>
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
