import React from "react";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { Flex } from "antd";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex className="home" vertical justify="center" align="center">
        <Flex
          className="flex"
          gap={70}
          horizontal
          justify="center"
          align="center"
        >
          <Flex className="flex" vertical justify="start">
            <h1>Omar Alfawareh</h1>
            <TypeAnimation
              className="animation"
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
            <p>Hardworking software engineering student and web developer.</p>
            <Flex horizontal justify="start" gap={"middle"}>
              <a
                className="socials"
                href="https://www.linkedin.com/in/omaralfawareh/"
              >
                <LinkedinFilled className="icons" />
              </a>
              <a className="socials" href="https://github.com/omaralfawareh">
                <GithubFilled className="icons" />
              </a>
              <a
                className="socials"
                href="https://www.instagram.com/omar_alfawareh/"
              >
                <InstagramFilled className="icons" />
              </a>
              <a className="socials" href="/404">
                <FacebookFilled className="icons" />
              </a>
            </Flex>
            {/* <Button
              variant="contained"
              onClick={() => {
                navigate("/about");
              }}
              className="home-button"
            >
              <span>About Me</span>
            </Button> */}
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Home;
