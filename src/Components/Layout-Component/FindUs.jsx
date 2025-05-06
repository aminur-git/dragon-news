import React from "react";

const FindUs = () => {
  return (
    <div className=" *:bg-white ">
      <h2 className="font-semibold">Find Us on</h2>
      <div className="join join-vertical w-full mt-2">
        <button className="join-item btn  bg-[#ffff] text-black justify-start">
          <svg
          className="bg-blue-500 p-1 rounded"
            aria-label="Facebook logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          Facebook
        </button>

        <button className="join-item btn bg-[#ffff] text-black justify-start ">
          <svg
            aria-label="X logo"
            width="16"
            height="12"
            viewBox="0 0 300 271"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
            />
          </svg>
          X
        </button>
      </div>
    </div>
  );
};

export default FindUs;
