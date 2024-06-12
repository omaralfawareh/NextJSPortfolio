import React, { useState } from "react";
import Link from "next/link";
import type { contactDataType } from "../api/contact";

const Index: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleMessage = () => {
    const data: contactDataType = { name, email, message };
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  return (
    <div
      className={`flex flex-col h-screen w-screen gap-20 justify-center items-center p-6 md:w-full`}
    >
      <h1 className="text-center text-6xl md:text-left font-medium ">
        Get in Touch
      </h1>
      <div className="flex flex-col justify-center items-center gap-10 h-1/2 w-full md:w-1/2  bg-black py-10 px-0 rounded-2xl shadow-2xl shadow-white">
        <input
          className="bg-[#111] rounded px-5 py-2 h-1/4 w-[90%] md:w-[80%] "
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-[#111] rounded px-5 py-2 h-1/4 w-[90%] md:w-[80%]"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#111] rounded px-5 py-2 h-full w-[90%] md:w-[80%]"
          placeholder="Enter Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleMessage}
          className="text-base bg-[#111] px-5 py-2 w-full w-[90%] md:w-[80%] rounded mt-2 hover:text-white text-center "
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Index;
