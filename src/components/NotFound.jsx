import React from "react";
import { Link, useLocation } from "react-router-dom";
import notfound from "../assets/notfound.svg";

const NotFound = () => {
  const location = useLocation();
  const requestedPage = location.pathname;
  const splittedPath = requestedPage.split("/");
  return (
    <div className="flex flex-col justify-center items-center h-full gap-8  bg-[#D2E0FB]">
      <img
        src={notfound}
        alt="Not Found"
        className="h-full w-full object-contain py-2"
      />
      <p className="bg-[#FF6868] p-3 rounded-sm  text-white font-poppins font-bold text-2xl ">
        The page{" "}
        <span className="bg-green-400 p-1 rounded-sm">{splittedPath}</span> does
        not exist. Please click the button below to go back. :(
      </p>
      <button className="m-5">
        <Link
          to="/"
          className="bg-[#176B87] p-3 rounded-sm  text-white font-poppins font-bold text-2xl"
        >
          Home
        </Link>
      </button>
    </div>
  );
};
export default NotFound;
