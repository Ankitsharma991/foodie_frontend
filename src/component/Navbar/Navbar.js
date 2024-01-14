import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { FaUser } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const [authUser, setAuthUser] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="w-full h-fit md:justify-around justify-center shadow-md fixed bg-cyan-100 z-50 flex items-center md:px-[10vw]">
      <Logo />
      <div
        className={`flex flex-1 justify-${isMobile ? "center" : "end"} ${
          isMobile ? "flex-col" : "flex-row"
        } md:gap-[10vw]`}
      >
        {!isMobile && (
          <>
            <div className="flex justify-center items-center py-3 shadow-md px-5 bg-white">
              <input
                type="text"
                placeholder="Search.."
                className=" bg-transparent outline-none border-r-2 border-black"
              />
              <IoSearch className="ml-3 hover:cursor-pointer" size={20} />
            </div>

            <div className="flex justify-center gap-5 ">
              <p className="flex items-center gap-2 font-serif hover:text-gray-600 text-[20px] hover:cursor-pointer">
                Home
              </p>
              <p className="flex items-center gap-2 font-serif hover:text-gray-600 text-[20px] hover:cursor-pointer">
                Browse
              </p>
              <p className=" flex items-center gap-2 font-serif hover:text-gray-600 text-[20px] hover:cursor-pointer">
                Cart <FaOpencart />
              </p>
            </div>
          </>
        )}

        <div className="flex gap-5">
          {authUser && (
            <p className="shadow-md uppercase flex justify-center items-center w-fit h-fit gap-2 bg-white rounded-full font-medium px-5 py-2 hover:cursor-pointer hover:text-gray-600">
              Log in <IoLogIn />
            </p>
          )}
          {authUser && (
            <p
              className="shadow-md uppercase flex justify-center items-center w-fit h-fit gap-2 bg-white rounded-full font-medium px-5 py-2 hover:cursor-pointer hover:text-gray-600"
              onClick={() => setAuthUser(!authUser)}
            >
              Register <FaUser />
            </p>
          )}
          {!authUser && (
            <p
              className="shadow-md uppercase flex justify-center items-center w-fit h-fit gap-2 bg-white rounded-full font-medium px-5 py-2 hover:cursor-pointer hover:text-gray-600"
              onClick={() => setAuthUser(!authUser)}
            >
              User <BsThreeDotsVertical />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
