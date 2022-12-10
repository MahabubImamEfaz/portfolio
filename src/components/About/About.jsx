import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-b from-[#14213d] to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 max-w-[1000px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#fca311]">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I'm Mahabub Imam Efaz. Web-developer based in Dhaka, Bangladesh
        </p>

        <br />

        <p className="text-xl">
          Currently, I’m studying at Jahangirnagar University majoring in
          Accounting & Information Systems. My passion for technology extends
          beyond my education. It is this passion that drives me to code. The
          development of excellent software that improves the lives of others is
          what I am passionate about.
        </p>
      </div>
    </div>
  );
};

export default About;
