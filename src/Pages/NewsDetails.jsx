import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightNav from "../Components/Layout-Component/RightNav";
import { Link, Navigate, useLoaderData } from "react-router";
import { BsArrowLeft } from "react-icons/bs";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  console.log(news);

  const { title, image_url, details,  } = news;


  return (
    <div className="space-y-6">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-12 md:col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card justify-start items-start w-full bg-base-100 rounded-md border border-gray-200 ">
            <figure className="w-full ">
              <img
                src={image_url}
                alt="thumbnail  "
                className="rounded-md w-full object-cover p-4 md:p-8"
              />
            </figure>
            <div className="card-body items-start text-left">
              <h2 className="card-title font-bold text-xl  md:text-3xl">{title}</h2>
              <p className="text-justify text-lg">
                {details}
              </p>
              <div className="card-actions mt-4">
                <Link to={`/category/${news.category_id}`} className="btn bg-[#D72050] text-white">
                <BsArrowLeft className="text-xl" />
                <span>All news in this category</span></Link>
              </div>
            </div>
          </div>
        </section>

        <aside className="col-span-8 md:col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
