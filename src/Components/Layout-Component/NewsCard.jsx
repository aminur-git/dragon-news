import React from "react";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi2";

const NewsCard = ({ news }) => {
  const { title, image_url, details, total_view, rating, author } = news;

  return (
    <div className="card bg-base-100  shadow border-x border-gray-100 rounded-lg">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <HiOutlineBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>
        <figure className="py-4">
          <img src={image_url} alt="News Thumbnail" className="rounded" />
        </figure>
        <p className="text-gray-600 text-sm">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <span className="text-orange-500 font-semibold ml-1 cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 font-semibold">Rating:</span>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`mr-1 text-lg ${
                  i < Math.round(rating?.number)
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              {rating?.number}
            </span>
          </div>
          <span className="text-sm text-green-600 font-medium">
            {rating?.badge}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
