import React from "react";
import Link from "next/link";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 content-center justify-center">
      <h1 className="font-medium text-6xl">Omar Alfawareh</h1>
      <TypeAnimation
        className="text-xl"
        sequence={[
          "Software Engineer",
          1000,
          "Web Developer",
          1000,
          "Mobile Developer",
          1000,
          "Full-Stack Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <p className="text-base text-[#bbb]">
        Hardworking software engineering student and web developer.
      </p>
      <div className="flex flex-row gap-5">
        <a
          className="text-2xl hover:scale-150 transition"
          href="https://www.linkedin.com/in/omaralfawareh/"
        >
          <LinkedinFilled />
        </a>
        <a
          className="text-2xl hover:scale-150 transition"
          href="https://github.com/omaralfawareh"
        >
          <GithubFilled />
        </a>
        <a
          className="text-2xl hover:scale-150 transition"
          href="https://www.instagram.com/omar_alfawareh/"
        >
          <InstagramFilled />
        </a>
        <a className="text-2xl hover:scale-150 transition" href="/404">
          <FacebookFilled />
        </a>
      </div>
      <Link
        href="/about"
        className="text-base bg-black px-5 py-2 w-1/3 rounded mt-2 hover:text-white text-center"
      >
        About Me
      </Link>
    </div>
  );
};

export default Home;
