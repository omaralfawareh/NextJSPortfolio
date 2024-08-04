import Home from "../components/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HomePage() {
  return (
    <main
      className={`h-screen flex flex-col items-center content-center justify-center`}
    >
      <Home />
    </main>
  );
}
export async function getStaticProps({ locale }: { locale: "ar" | "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
