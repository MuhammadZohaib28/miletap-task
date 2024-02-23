import React from "react";
import { useMealContext } from "../context/mealContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const { categories } = useMealContext();
  return (
    <div className="relative flex flex-col h-screen gap-10 p-6 pl-2 pr-2 md:pl-28 md:pr-28 bg-[#ffffff] dark:bg-[#0F0F0F] font-poppins">
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="https://media.urbanistnetwork.com/saigoneer/article-images/2018/07/makan/SGFoodLandscape_SGRh.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-3xl text-[#F85606] bg-white  md:p-2 md:w-1/5 w-1/2 font-medium relative z-10">
        Menu - Category
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center h-full md:h-[calc(100vh-20rem)] bg-[#ff88186b] rounded-lg relative z-10">
        <ul className="flex  flex-wrap w-full justify-center items-start md:gap-10 gap-4 md:p-2 p-1 mx-auto">
          {categories.map((category) => (
            <li
              className="bg-white md:py-3 py-1 md:px-6 px-2 border border-[#F85606] hover:bg-[#F85606] hover:text-white text-3xl"
              key={category.idCategory}
            >
              <Link
                to={`/meal/category/${category.strCategory}`}
                onClick={() => closeSidebar()}
              >
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
