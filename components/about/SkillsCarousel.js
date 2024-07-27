import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import Image from "next/image";
import { Flex } from "antd";

const SkillCarousel = () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoCycle: true,
            cycleInterval: 2000,
            animationDuration: 1800,
            scrollOnDevice: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            autoCycle: true,
            cycleInterval: 2000,
            animationDuration: 1800,
            scrollOnDevice: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoCycle: true,
            cycleInterval: 2000,
            animationDuration: 1800,
            scrollOnDevice: false,
          },
        },
      ]}
      autoCycle={true}
      cycleInterval={2000}
      animationDuration={1800}
      arrows={false}
      dots={false}
      showSides={false}
      sidesOpacity={1}
      sideSize={1}
      slidesToScroll={1}
      slidesToShow={5}
    >
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="React.js"
          src={require("../../assets/react.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="Java"
          src={require("../../assets/java.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="C++"
          src={require("../../assets/cpp.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="CSS"
          src={require("../../assets/css.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="HTML"
          src={require("../../assets/html.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="Python"
          src={require("../../assets/python.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="C#"
          src={require("../../assets/csharp.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="Unity"
          src={require("../../assets/unity.png")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          style={{ width: "100px", height: "100px" }}
          alt="Bootstrap"
          src={require("../../assets/bootstrap.png")}
        />
      </div>
    </InfiniteCarousel>
  );
};

export default SkillCarousel;
