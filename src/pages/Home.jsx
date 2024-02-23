import React from "react";

import { useMealContext } from "../context/mealContext";

import CategoryList from "../components/Category/CategoryList";

const Home = () => {
  const { categories, categoryLoading } = useMealContext();
  return (
    <div>
      <main className="">
        {categoryLoading ? (
          <h1>Loading</h1>
        ) : (
          <CategoryList categories={categories} />
        )}
      </main>
    </div>
  );
};

export default Home;
