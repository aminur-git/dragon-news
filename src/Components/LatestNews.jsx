import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2 ">
      <p className="bg-[#D72050] text-base-100 px-2 ">Latest</p>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/a" className="mx-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum,
        </Link>
        <Link to="/news" className="mx-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum,
        </Link>
        <Link to="/news" className="mx-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
