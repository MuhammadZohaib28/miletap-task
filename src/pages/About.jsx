import React from "react";

import aboutmeee from "../assets/aboutmee.svg";

const Aboutme = () => {
  return (
    <div className="bg-white dark:bg-[#1e1e1e] md:h-screen md:py-20 py-3 md:px-52 px-2 font-poppins w-full">
      <div className="flex md:flex-row flex-col w-full justify-around md:gap-32 items-center">
        <div className="h-80 w-full">
          <img
            src={aboutmeee}
            alt=""
            className="h-full object-contain w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="">
            <h1 className="text-5xl font-extrabold text-green-700">About Me</h1>
          </div>
          <div>
            <h2 className="text-[#2d2e32] dark:text-white text-2xl font-bold">
              A dedicated Front-end Developer based in Karachi, Pakistan. 📍
            </h2>
          </div>
          <div className="bottom">
            <p className="text-lg leading-loose dark:text-white">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in{" "}
              <span className="text-white bg-green-600 py-1 px-2 font-bold my-20">
                HTML5
              </span>{" "}
              ,{" "}
              <span className="text-white bg-green-600 py-1 px-2 font-bold">
                CSS3
              </span>
              ,{" "}
              <span className="text-white bg-green-600 py-1 px-2 font-bold">
                JavaScript
              </span>
              ,{" "}
              <span className="text-white bg-green-600 py-1 px-2 font-bold">
                ReactJS
              </span>{" "}
              along with{" "}
              <span className="text-white bg-green-600 p-2 font-bold">
                NextJS
              </span>{" "}
              ,{" "}
              <span className="text-white bg-green-600 p-2 font-bold">
                Tailwind
              </span>
              , and{" "}
              <span className="text-white bg-green-600 p-2 font-bold">
                SCSS/SASS
              </span>
              . I excel in designing and maintaining{" "}
              <span className="text-white bg-green-600 p-2 font-bold">
                responsive websites
              </span>{" "}
              that offer a smooth user experience. My expertise lies in crafting
              <span className="text-white bg-green-600 p-2 font-bold">
                dynamic
              </span>
              , engaging interfaces through writing{" "}
              <span className="text-white bg-green-600 p-2 font-bold">
                clean
              </span>{" "}
              and{" "}
              <span className="text-white bg-green-600 p-2 font-bold">
                optimized code
              </span>{" "}
              and utilizing cutting-edge development tools and techniques. I am
              also a{" "}
              <span className="text-white bg-green-600 p-2 font-bold">
                team player
              </span>
              who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
