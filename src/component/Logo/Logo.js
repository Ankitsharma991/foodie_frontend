import React from "react";
import logo from "../../assets/images/foodie_logo.png";
import { Link } from "react-router-dom";
// import { useMediaQuery } from "usehooks-ts";

const Logo = () => {
  // const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-col w-fit items-center scale-75 cursor-pointer">
      <Link to="/">
        <img src={logo} alt="logo" className="h-[80px] w-[100px] mb-2" />
      </Link>
      <div className="flex">
        <p className="font-bold">
          <span className="bg-green-500 px-2 py-1 mx-1 text-white rounded-lg">
            F
          </span>
          <span className="bg-blue-500 px-2 py-1 mx-1 text-white rounded-lg">
            O
          </span>
          <span className="bg-red-500 px-2 py-1 mx-1 text-white rounded-lg">
            O
          </span>
          <span className="bg-yellow-500 px-2 py-1 mx-1 text-white rounded-lg">
            D
          </span>
          <span className="bg-purple-500 px-2 py-1 mx-1 text-white rounded-lg">
            I
          </span>
          <span className="bg-orange-500 px-2 py-1 mx-1 text-white rounded-lg">
            E
          </span>
        </p>

        {/* {isMobile && (
          <>
            <p>
              <span className="font-bold px-2 bg-black mx-1 text-white rounded-md">
                ~
              </span>
            </p>
            <p className="font-bold">
              <span className="bg-green-500 px-2 py-1 mx-1 text-white rounded-lg">
                H
              </span>
              <span className="bg-blue-500 px-2 py-1 mx-1 text-white rounded-lg">
                O
              </span>
              <span className="bg-red-500 px-2 py-1 mx-1 text-white rounded-lg">
                M
              </span>
              <span className="bg-yellow-500 px-2 py-1 mx-1 text-white rounded-lg">
                E
              </span>
            </p>
          </>
        )} */}
      </div>
    </div>
  );
};

export default Logo;
