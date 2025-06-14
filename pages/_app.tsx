import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { appWithTranslation, useTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import { Home, User, Settings, Mail, Menu, X } from "lucide-react";
import FloatButtons from "@/components/FloatButtons";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("/");
  const router = useRouter();
  const { i18n, t } = useTranslation("common");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setSelectedKey(router.pathname);
  }, [router.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.pathname]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    {
      key: "/",
      icon: Home,
      label: t("home"),
    },
    {
      key: "/about",
      icon: User,
      label: t("about"),
    },
    {
      key: "/projects",
      icon: Settings,
      label: t("projects"),
    },
    {
      key: "/contact",
      icon: Mail,
      label: t("contact"),
    },
  ];

  const handleMenuItemClick = (key: string) => {
    router.push(key);
    setSelectedKey(key);
    closeMobileMenu();
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-[#111]">
      <FloatButtons />
      <Toaster />

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-black dark:text-white">
            {t("portfolio", "Portfolio")}
          </h1>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-gray-100 dark:bg-[#111] text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 ${
          i18n.language === "ar" ? "right-0" : "left-0"
        } h-full w-80 max-w-[85vw] bg-white dark:bg-black border-${
          i18n.language === "ar" ? "l" : "r"
        } border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0"
            : i18n.language === "ar"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-black dark:text-white">
              {t("menu", "Menu")}
            </h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#111]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedKey === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => handleMenuItemClick(item.key)}
                    className={`w-full flex items-center gap-4 px-4 py-2.5 rounded-xl text-left transition-all duration-200 ${
                      i18n.language === "ar"
                        ? "flex-row-reverse text-right"
                        : ""
                    } ${
                      isSelected
                        ? "bg-gray-100 dark:bg-[#111] text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-base font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:block fixed top-0 ${
          i18n.language === "ar" ? "right-0" : "left-0"
        } h-full w-[400px] xl:w-[450px] bg-white dark:bg-black border-${
          i18n.language === "ar" ? "l" : "r"
        } border-gray-200 dark:border-gray-800 z-30`}
      >
        <div className="flex flex-col items-center justify-center h-full p-6">
          <nav className="w-full flex justify-center">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedKey === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => handleMenuItemClick(item.key)}
                    className={`group w-48 flex items-center justify-center gap-4 px-6 py-3 rounded-xl transition-all duration-200 ${
                      i18n.language === "ar" ? "flex-row-reverse" : ""
                    } ${
                      isSelected
                        ? "bg-gray-100 dark:bg-[#111] text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <Icon size={22} />
                    <span className="text-lg font-semibold group-hover:tracking-wider transition-[letter-spacing]">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`${montserrat.className} ${
          i18n.language === "ar"
            ? "lg:mr-[400px] xl:mr-[450px]"
            : "lg:ml-[400px] xl:ml-[450px]"
        } pt-16 lg:pt-0 min-h-screen`}
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="min-h-screen bg-[#f8f8f8] dark:bg-[#111] text-black dark:text-white">
          <motion.div
            initial={{ x: i18n.language === "ar" ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: i18n.language === "ar" ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.7 }}
            key={router.asPath}
            className="w-full"
          >
            <Component {...pageProps} />
            <Analytics />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default appWithTranslation(App);
