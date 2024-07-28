import React from "react";
import { Timeline } from "antd";
import Link from "next/link";
import Image from "next/image";
// import Resume from "../../assets/Resume.pdf";
import ReactLogo from "../../public/assets/react.png";
import JavaLogo from "../../public/assets/java.png";
import CppLogo from "../../public/assets/cpp.png";
import CssLogo from "../../public/assets/css.png";
import HtmlLogo from "../../public/assets/html.png";
import CsharpLogo from "../../public/assets/csharp.png";
import UnityLogo from "../../public/assets/unity.png";
import BootstrapLogo from "../../public/assets/bootstrap.png";
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
  const age = calculateAge("2002-04-17");
  const skills = [
    { src: ReactLogo, alt: "React" },
    { src: JavaLogo, alt: "Java" },
    { src: CppLogo, alt: "C++" },
    { src: CssLogo, alt: "CSS" },
    { src: HtmlLogo, alt: "HTML" },
    { src: CsharpLogo, alt: "C#" },
    { src: UnityLogo, alt: "Unity" },
    { src: BootstrapLogo, alt: "Bootstrap" },
  ];
  return (
    <div className="flex flex-col gap-8 justify-center p-12 text-base">
      <h1 className="text-left font-medium text-4xl">About me</h1>
      <h2 className="text-left text-2xl">Omar Alfawareh</h2>
      <p className="text-left text-xl text-[#bbb]">Software Engineer</p>
      <hr />
      <div className="flex flex-col gap-4">
        <p>
          Hi, my name is Omar Alfawareh, and I am a software engineering student
          with a passion for web development and 2D game design. With a rich
          background in creating dynamic and user-friendly websites, I have
          honed my skills in both front-end and back-end technologies.
        </p>
        <p>
          My journey in software engineering is driven by an insatiable
          curiosity to explore new technologies and push the boundaries of
          digital innovation.
        </p>
      </div>
      <hr />
      <ul className="w-full">
        <li>
          <span className="inline-block w-28">Birthday :</span>
          <span>17/04/2002</span>
        </li>
        <li className="w-full">
          <span className="inline-block w-28">Age :</span>
          <span>{age}</span>
        </li>
        <li>
          <span className="inline-block w-28">Address :</span>
          <span>Amman, Jordan</span>
        </li>
        <li>
          <span className="inline-block w-28">Email :</span>
          <span>
            <a href="mailto:alfawareho@gmail.com">alfawareho@gmail.com</a>
          </span>
        </li>
        <li>
          <span className="inline-block w-28">Phone :</span>
          <span>
            <a href="tel:+962791141046">+962791141046</a>
          </span>
        </li>
      </ul>
      <Link
        href="/about"
        className="text-base bg-black px-5 py-2 w-full md:w-1/3 rounded-l mt-2 hover:text-white text-center "
      >
        Download CV
      </Link>
      <h2 className="text-left text-2xl">Skills</h2>
      <hr />
      <div className="flex justify-between flex-wrap">
        {skills.map((skill) => {
          return (
            <Image
              alt={skill.alt}
              key={skill.alt}
              src={skill.src}
              width={100}
              height={100}
            />
          );
        })}
      </div>
      <hr />
      <div className="flex  justify-center">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-left text-2xl m-1">Experience</h2>
          <Timeline
            items={[
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">Shahid, MBC Group</p>
                    <span className="text-[#bbb] text-base">
                      Associate Software Engineer
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
                      Web Developer Intern
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
                      Full-Stack Developer Intern
                    </span>
                  </div>
                ),
                color: "black",
              },
            ]}
          />
        </div>
        <div className="w-full flex gap-2 m-1 flex-col">
          <h2 className="text-left text-2xl m-1">Education</h2>
          <Timeline
            items={[
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">
                      Princess Sumaya University for Technology
                    </p>
                    <span className="text-[#bbb] text-base">
                      Software Engineering
                    </span>
                  </div>
                ),
                color: "black",
              },
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white text-base">
                      Al-Ittihad International Schools
                    </p>
                    <span className="text-[#bbb] text-base">Student</span>
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
