import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="bg-orange-200 dark:bg-[#171717] md:py-5 py-2 px-3 font-poppins">
      <div className="container  mx-auto">
        <div className="text-center text-xl font-bold py-6 ">
          <h1 className="text-3xl text-[#F85606] bg-white  md:p-2 p-1 md:w-1/6 w-1/2 font-medium relative ">
            Category
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => {
            const {
              idCategory: id,
              strCategory: title,
              strCategoryThumb: thumbnail,
            } = category;

            return (
              <Link to={`/meal/category/${title}`} key={id}>
                <div className="bg-yellow-200 dark:bg-[#313131] rounded-md shadow-md overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="dark:bg-gray-900 text-white text-center py-2">
                    <h3 className="text-lg text-black dark:text-white font-semibold uppercase">
                      {title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
