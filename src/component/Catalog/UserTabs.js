import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";

const UserTabs = () => {
  const [authUser, setAuthUser] = useState(true);
  return (
    <div className="text-center items-center md:mt-[10vh] mt-[11vh] flex flex-1 h-full">
      {authUser ? (
        <div className="flex items-center justify-between w-full shadow-white   pt-3 shadow-inner border-b-2 pb-3 bg-red-50 px-5 text-center">
          <div className="flex flex-col items-start text-center justify-center">
            <p className="text-red-700 md:font-thin md:text-[1.5vmax] text-[1.2vmax] font-medium text-center">
              Hello Ankit Sharma,
            </p>
            <p className="text-red-500 text-[1.5vmax] md:text-[1vmax] items-center text-center">
              Welcome to back!
            </p>
          </div>
          <p className="shadow-md uppercase  md:flex md:visible hidden justify-center items-center w-fit h-fit gap-2  rounded-full font-medium px-5 py-2 hover:cursor-pointer text-white bg-red-500 hover:border-2 hover:border-red-500 hover:bg-white hover:text-red-500 ">
            Menu Guide
          </p>
          <div className="flex justify-around  md:gap-[5vw] gap-10 items-center md:scale-100 scale-75">
            <FaOpencart
              size={25}
              className="hover:cursor-pointer hover:text-red-500"
            />

            <div className="w-fit h-fit flex gap-3 items-center">
              <div className="flex flex-col ">
                <p className="font-medium text-[15px] mt-1 text-red-500">
                  Ankit
                </p>
                <p className="font-thin text-[12px] mt-[-5px] text-red-700">
                  Admin
                </p>
              </div>
              <FaUserTie
                size={45}
                className="rounded-[50%] border-2 border-red-500"
              />
            </div>
            <VscSignOut
              size={30}
              onClick={() => setAuthUser(!authUser)}
              className="text-gray-900 hover:text-red-500 hover:cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-center justify-center w-full shadow-white  pt-3 shadow-inner border-b-2 pb-3 bg-red-50">
          <p
            className="text-red-700 font-thin md:text-[1.5vmax] font-mono"
            onClick={() => setAuthUser(!authUser)}
          >
            Dishes Catalog
          </p>
          <p className="text-red-500 text-[1.5vmax] md:text-[1vmax]">
            Welcome to Catalog
          </p>
        </div>
      )}
    </div>
  );
};

export default UserTabs;
