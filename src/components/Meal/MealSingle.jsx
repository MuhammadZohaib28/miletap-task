import React from "react";

import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

const MealSingle = ({ meal }) => {
  return (
    <div className="bg-orange-200 dark:bg-[#191919] flex flex-col justify-between items-center p-6 pl-2 pr-2 md:pl-28 md:pr-28 text-black font-poppins">
      <div className=" flex flex-col w-full ">
        <div className="flex w-full bg-orange-600 text-white">
          <ul className="flex items-center gap-2 my-2">
            <li className="breadcrumb-item">
              <Link to="/" className="flex align-center">
                <AiFillHome className="text-2xl text-white" />
              </Link>
            </li>
            <li className="flex align-center mx-1">
              <BiChevronsRight className="text-2xl text-white" />
            </li>
            <li className="breadcrumb-item flex">
              <span to="" className="text-xl  text-uppercase">
                {meal?.title}
              </span>
            </li>
          </ul>
        </div>

        <div className="md:text-3xl text-2xl bg-white text-orange-500 md:w-1/5 w-1/2 p-1 md:p-3 rounded-sm font-bold my-2">
          Meal Details
        </div>
        <section className="flex flex-col md:flex-row justify-between w-full gap-5 md:gap-20 bg-[#ffffff2b] ">
          <div className="bg-orange-200 dark:bg-[#2d2d2d] flex flex-col md:flex-row p-2">
            <div className="h-full w-full">
              <img
                src={meal?.thumbnail}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="  bg-white dark:bg-[#e1e1e1] flex flex-col ">
              <h3 className="md:text-6xl text-4xl shadow-xl shadow-orange-300 dark:shadow-white text-orange-600">
                {meal?.title}
              </h3>
              <div className="md:py-4 py-2">
                <div className="category flex items-center gap-3">
                  <span className="font-bold text-xl text-black capitalize">
                    category:
                  </span>
                  <span className="text-uppercase text-xl">
                    {meal?.category}
                  </span>
                </div>

                <div className="source flex flex-col py-4">
                  <span className="font-bold text-xl text-black">Source: </span>
                  <a
                    href={meal.source}
                    className="hover:text-orange-500 overflow-hidden "
                  >
                    {meal.source
                      ? (meal?.source).substring(0, 40) + "..."
                      : "Not found"}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 py-4 text-black">
                <h6 className="font-bold text-xl text-black">Ingredients</h6>
                <ul className="flex flex-col gap-2">
                  {meal?.ingredients?.map((ingredient, idx) => (
                    <li
                      key={idx}
                      className="flex items-center font-medium bg-orange-200  md:w-1/3 w-full md:p-1 p-3"
                    >
                      <span>{idx + 1}-</span>
                      <span className="text-capitalize">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MealSingle;
