import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout-Component/LeftNavbar";
import RightNav from "../Components/Layout-Component/RightNav";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="space-y-2 poppins w-11/12 mx-auto">
      <header>
        <Header></Header>{" "}
      </header>
      <section className="">
        <LatestNews></LatestNews>
      </section>
      <nav className="p-2">
        <Navbar></Navbar>
      </nav>
      <main className="pt-5 grid md:grid-cols-12 gap-3">
        
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>{" "}
        </aside>
        
        
        <section className="col-span-6">
        <Outlet></Outlet> 
        </section>
        
        
        <aside className="col-span-3">
          {" "}
          <RightNav></RightNav>{" "}
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
