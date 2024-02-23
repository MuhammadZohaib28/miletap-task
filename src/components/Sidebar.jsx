import React from "react";
import { useSidebarContext } from "../context/sidebarContext";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();

  return (
    <nav
      className={`sidebar ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } fixed right-0 top-0 w-1/6 h-full bg-white z-50 p-6 shadow-lg transition-transform`}
    >
      <button
        type="button"
        className="navbar-hide-btn absolute right-4 top-4 text-orange transition-colors hover:text-dark"
        onClick={() => closeSidebar()}
      >
        <ImCancelCircle size={24} />
      </button>

      <div className="side-content bg-[orange-300] px-3 mt-16">
        <ul className="flex flex-col gap-2 justify-around items-start font-poppins h-[calc(100vh-10rem)]">
          <li className="hover:bg-[#ffffff83] text-2xl hover:w-full hover:p-2">
            <Link to={"/"}>Homepage</Link>
          </li>
          <li className="hover:bg-[#ffffff83] text-2xl hover:w-full hover:p-2">
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li className="hover:bg-[#ffffff83] text-2xl hover:w-full hover:p-2">
            <Link to={"/favourite"}>My Favourite</Link>
          </li>
          <li className="hover:bg-[#ffffff83] text-2xl hover:w-full hover:p-2">
            <Link to={"/randomMeal"}>Random Meal</Link>
          </li>
          <li className="hover:bg-[#ffffff83] text-2xl hover:w-full hover:p-2">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
