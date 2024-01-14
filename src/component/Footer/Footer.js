import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";
import { useMediaQuery } from "usehooks-ts";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="w-full md:pl-[15vw] md:pr-[15vw] p-0 justify-center bg-blue-400 pb-3">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex md:items-start">
          <Logo />
          {!isMobile && (
            <p className="hidden md:block text-center md:w-[18vw] font-mono md:text-[20px] md:flex-1 md:mt-[1.5vmax]">
              Pure Tastes, Simple Joys: your Table, Our Pleasure.
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="flex justify-center gap-5 items-center">
            <CiTwitter
              size={25}
              className="text-black hover:text-white hover:cursor-pointer hover:scale-[1.5]"
            />
            <CiFacebook
              size={25}
              className="text-black hover:text-white hover:cursor-pointer hover:scale-[1.5]"
            />
            <CiInstagram
              size={25}
              className="text-black hover:text-white hover:cursor-pointer hover:scale-[1.5]"
            />
            <CiLinkedin
              size={25}
              className="text-black hover:text-white hover:cursor-pointer hover:scale-[1.5]"
            />
          </div>
          {isMobile && (
            <p className="text-center font-mono text-[14px] mt-2">
              Pure Tastes, Simple Joys: your Table, Our Pleasure.
            </p>
          )}
        </div>
      </div>
      <div className="flex border-b-[1px] justify-center gap-5 border-t-[1px] md:shadow:sm md:border-white md:border-b-[1px] py-2 mt-3">
        <Link to="/">
          <p className="hover:text-white hover:underline hover:scale-[1.2]">
            Recipes
          </p>
        </Link>
        <Link to="/">
          <p className="hover:text-white hover:underline hover:scale-[1.2]">
            Contact
          </p>
        </Link>
        <Link to="/">
          <p className="hover:text-white hover:underline hover:scale-[1.2]">
            Shop
          </p>
        </Link>
        <Link to="/">
          <p className="hover:text-white hover:underline hover:scale-[1.2]">
            Feedback
          </p>
        </Link>
      </div>
      <div className="flex flex-wrap md:justify-center justify-around gap-2 md:gap-5  mt-3">
        <p className="mb-2 md:mb-0">@Copyright.2024</p>
        <Link to="/">
          <p className="hover:text-white hover:underline hover:scale-[1.1]">
            Terms and Condition
          </p>
        </Link>
        <Link to="/">
          <p className="hover:text-white hover:underline hover:scale-[1.1]">
            Privacy Policy
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
