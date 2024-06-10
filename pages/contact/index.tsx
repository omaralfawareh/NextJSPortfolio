import React from "react";

const index = () => {
  return (
    <div
      className={`flex flex-col h-screen w-screen gap-20 justify-center items-center p-6 md:w-full`}
    >
      <h1 className="text-center text-6xl md:text-left font-medium ">
        Get in Touch
      </h1>
      <div className="flex flex-col justify-center items-center gap-10 h-1/2 w-full md:w-1/2  bg-black py-10 px-0 rounded-2xl shadow-2xl shadow-white">
        <input
          className="bg-[#111] rounded px-5 py-2 h-1/4 w-[80%] "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#111] rounded px-5 py-2 h-1/4 w-[80%]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#111] rounded px-5 py-2 h-full w-[80%]"
          placeholder="Enter Message"
          name="message"
        />
      </div>
    </div>
  );
};

export default index;
