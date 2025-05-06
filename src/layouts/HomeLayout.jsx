import React, { useContext } from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout-Component/LeftNavbar";
import RightNav from "../Components/Layout-Component/RightNav";
import { Outlet } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);
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
          {loading ? (
            <div className=" mx-auto">
              <div className="flex  w-full mx-auto flex-col gap-4">
              <div className="skeleton h-12 w-full"></div>
              <div className="skeleton h-82 w-full"></div>
              <div className="skeleton h-8 w-full"></div>
              <div className="skeleton h-8 w-xs"></div>
            </div>
            </div>
          ) : (
            <Outlet></Outlet>
          )}
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
