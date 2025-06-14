import React, { useState } from "react";
import type { contactDataType } from "../api/contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Index: React.FC = () => {
  const { i18n, t } = useTranslation("common");
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const align = i18n?.language === "ar" ? "text-right" : "text-left";

  const handleMessage = async () => {
    if (name === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: t("contact_page.errorName"),
      });
      return;
    }
    if (!validateEmail(email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: t("contact_page.errorEmail"),
      });
      return;
    }
    if (message === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: t("contact_page.errorMessage"),
      });
      return;
    }
    const data: contactDataType = { name, email, message };
    try {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        setIsLoading(false);
        throw new Error("An error occurred while sending your message.");
      }
      setIsLoading(false);
      const resultData = await response.json();
      setName("");
      setEmail("");
      setMessage("");
      toast({
        title: "Success",
        description: resultData.message,
      });
    } catch (e) {
      const error = e as Error;
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const validateEmail = (email: String) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md lg:max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {t("contact_page.title", "Get in Touch")}
          </h1>
        </div>

        <div className="bg-white dark:bg-black rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <input
                id="name"
                type="text"
                placeholder={t("contact_page.namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#111] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <input
                id="email"
                type="email"
                placeholder={t("contact_page.emailPlaceholder")}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValidEmail(validateEmail(e.target.value));
                }}
                className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-[#111] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  !isValidEmail && email !== ""
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {!isValidEmail && email !== "" && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {t("contact_page.errorEmail")}
                </p>
              )}
            </div>

            <div>
              <textarea
                id="message"
                rows={5}
                placeholder={t("contact_page.messagePlaceholder")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#111] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical min-h-[120px]"
              />
            </div>

            <button
              onClick={handleMessage}
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-gray-300 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                </div>
              ) : (
                t("contact_page.sendMessageButton")
              )}
            </button>
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
