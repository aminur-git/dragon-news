import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  console.log(categories);

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold">All Category</h2>
      <div id="category_btn" className="flex flex-col gap-2 mt-3">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} className="btn w-full" key={category.category_id}>
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
