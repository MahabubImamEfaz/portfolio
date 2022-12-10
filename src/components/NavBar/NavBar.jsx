import React, { useState } from "react";
import logo from "../../assets/portfolio logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 backdrop-blur-[30px] bg-[#ffffff10] text-[#fca311]  ">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex font-bold">
        <li>
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            PORTFOLIO
          </Link>
        </li>
        {/* <li>SKILLS</li> */}
        <li>
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-[#fca311]"></FaBars>
        ) : (
          <FaTimes></FaTimes>
        )}
      </div>
      {/* mobilemenu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#14213d] text-[#fca311] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            PORTFOLIO
          </Link>
        </li>
        {/* <li className="py-5 text-3xl">SKILLS</li> */}
        <li className="py-5 text-3xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mahabub-imam/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/MahabubImamEfaz"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1tdYlkiJUu7DxyFiz4MutgIMywvacZnTM/view?usp=share_link"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
