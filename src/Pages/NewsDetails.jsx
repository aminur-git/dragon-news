import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightNav from "../Components/Layout-Component/RightNav";

const NewsDetails = () => {
  return (
    <div className="space-y-6">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
            <h2 className="font-semibold">Dragon News</h2>
        </section>
        <aside className="col-span-3">
            <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
