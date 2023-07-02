import React from "react";

function Header() {
  return (
    <div
      id="Header"
      className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Prince Singh</code>
        <code className="text-lightblue_vs">B.Tech CSE 2024</code>
        <code className="text-lightblue_vs">Full Stack Web Developer</code>
        <code className="text-lightblue_vs">MERN Stack</code>
      </div>
    </div>
  );
}

export default Header;
