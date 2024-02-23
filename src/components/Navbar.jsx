import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";

import { IoSunnySharp } from "react-icons/io5";

import { HiMoon } from "react-icons/hi";
import { useSidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const { openSidebar } = useSidebarContext();

  const element = document.documentElement;

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    {
      text: "light",
      icon: <IoSunnySharp />,
    },
    {
      text: "dark",
      icon: <HiMoon />,
    },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <nav className=" flex justify-between items-center p-6 pl-2 pr-2 md:pl-28 md:pr-28 bg-[#EEF5FF] dark:bg-[#0F0F0F]">
      <div className="md:hidden relative flex justify-between items-center w-full dark:text-[#DDE6ED]">
        <h1 className="capitalize text-5xl font-semibold font-dancing dark:text-[#DDE6ED]">
          <NavLink to={"/"} className={"dark:text-[#DDE6ED] "}>
            Foodicious
          </NavLink>
        </h1>
        <button
          onClick={handleMenu}
          className="md:hidden flex text-3xl cursor-pointer"
        >
          {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
        {isOpen && (
          <div className="dark:bg-[#181818] fixed right-0 top-0 p-3 z-50 overflow-hidden h-screen w-full bg-[#ffffff] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100">
            <button
              onClick={handleMenu}
              className="md:hidden flex text-3xl cursor-pointer absolute right-5"
            >
              {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
            <ul className="dark:text-[#DDE6ED] flex flex-col justify-center items-center gap-14 font-poppins text-md font-medium p-3 h-screen text-gray-800 ">
              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold  text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <Link to={"/"}>Homepage</Link>
              </li>
              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <Link to={"/favourite"}>My Favourite</Link>
              </li>
              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <Link to={"/randomMeal"}>Random Meal</Link>
              </li>
              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <Link to={"/about"}>About</Link>
              </li>
              {options.map((option, index) => (
                <li
                  onClick={() => setTheme(option.text)}
                  key={index}
                  className={`duration-150 text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full    bg-transparent ${
                    theme === option.text
                      ? " dark:text-[#2F58CD] text-yellow-600 "
                      : "text-black dark:text-white"
                  }`}
                >
                  <button className="text-2xl ">{option.icon}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex justify-betwee n items-baseline gap-5">
        <h1 className="capitalize text-5xl font-semibold font-dancing dark:text-[#DDE6ED]">
          <NavLink to={"/"}>Foodieeee</NavLink>
        </h1>
      </div>

      <ul className="hidden md:flex justify-between  items-center gap-6 font-poppins text-md font-medium text-gray-400">
        <button onClick={() => openSidebar()}>
          <FaBars className="text-3xl" />
        </button>

        {options.map((option, index) => (
          <li
            onClick={() => setTheme(option.text)}
            key={index}
            className={`duration-150    bg-transparent ${
              theme === option.text
                ? " dark:text-[#2F58CD] text-yellow-600 "
                : "text-black dark:text-white"
            }`}
          >
            <button className="text-2xl ">{option.icon}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
