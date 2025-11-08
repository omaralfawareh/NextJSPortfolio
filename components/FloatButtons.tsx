import React, { useEffect, useState } from "react";
import { Globe, Moon, Sun } from "lucide-react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const FloatButtons = () => {
  const router = useRouter();
  const { i18n } = useTranslation("common");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const handleChangeLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ar" : "en";
    const newUrl = `${window.location.origin}/${nextLanguage}/${router.pathname}`;
    window.location.href = newUrl;
  };

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
  };

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    setMounted(true);

    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 z-50 flex flex-col gap-2 sm:gap-3 ${
        i18n.language === "ar" ? "left-4 sm:left-6" : "right-4 sm:right-6"
      }`}
    >
      <button
        onClick={handleChangeTheme}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:border-gray-400 dark:bg-black border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl dark:hover:border-gray-400 transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white active:scale-95"
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {theme === "dark" ? (
          <Sun size={18} className="sm:w-5 sm:h-5" />
        ) : (
          <Moon size={18} className="sm:w-5 sm:h-5" />
        )}
      </button>
      <button
        onClick={handleChangeLanguage}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:border-gray-400 dark:bg-black border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 dark:hover:border-gray-400 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white active:scale-95"
        aria-label={`Switch to ${
          i18n.language === "en" ? "Arabic" : "English"
        }`}
      >
        <Globe size={18} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default FloatButtons;
