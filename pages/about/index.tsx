import React from "react";
import { Flex, Timeline } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";
// import Resume from "../../assets/Resume.pdf";
// import SkillCarousel from "./SkillCarousel";

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

  return (
    <div className="flex flex-col gap-2 justify-center border p-10">
      <h1 className="text-left">About me</h1>
      <h2 className="text-left">Omar Alfawareh</h2>
      <p className="text-left">Software Engineer</p>
      <hr />
      <p>
        Hi, my name is Omar Alfawareh, and I am a software engineering student
        with a passion for web development and 2D game design. With a rich
        background in creating dynamic and user-friendly websites, I have honed
        my skills in both front-end and back-end technologies.
      </p>
      <p>
        My journey in software engineering is driven by an insatiable curiosity
        to explore new technologies and push the boundaries of digital
        innovation.
      </p>
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
        About Me
      </Link>
      <h2 className="text-left">Skills</h2>
      <hr />
      {/* <SkillCarousel /> */}
      <hr />
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full">
          <h2 className="text-left">Experience</h2>
          <Timeline
            className="timeline"
            items={[
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white">Shahid, MBC Group</p>
                    <span className="text-white">Web Developer Intern</span>
                  </div>
                ),
                color: "black",
              },
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white">Eduhax</p>
                    <span className="text-white">Web Developer Intern</span>
                  </div>
                ),
                color: "black",
              },
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white">Orange Jordan</p>
                    <span className="text-white">
                      Full-Stack Developer Intern
                    </span>
                  </div>
                ),
                color: "black",
              },
            ]}
          />
        </div>
        <div className="w-full flex flex-col">
          <h2 className="text-white">Education</h2>
          <Timeline
            className="timeline"
            items={[
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white">
                      Princess Sumaya University for Technology
                    </p>
                    <span className="text-white">Software Engineering</span>
                  </div>
                ),
                color: "black",
              },
              {
                children: (
                  <div className="flex flex-col">
                    <p className="text-white">
                      Al-Ittihad International Schools
                    </p>
                    <span className="text-white">Student</span>
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
