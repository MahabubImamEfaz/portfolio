import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#14213d]  ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-[#ccd6f6]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fca311] ">
          MAHABUB IMAM
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A full-stack developer with great expertise in web development and
          digital experiences. As of right now, I'm focusing on building
          full-stack web applications that are responsive.
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1tdYlkiJUu7DxyFiz4MutgIMywvacZnTM/view?usp=share_link"
            class="button"
          >
            <span className="font-semibold">RESUME</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
