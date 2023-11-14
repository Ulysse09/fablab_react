import React from "react";
import logo from "../assets/fabIcon.png";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  return (
    <>
      <div className="absolute  flex w-full  p-4 px-8 justify-between items-center  ">
        <div className="  ">
          <img src={logo} className="md:w-[15rem] w-[8rem] " alt="" />
        </div>

        {/* navigation */}

        <div className=" hidden md:flex space-x-4  text-white font-semibold ">
          <Link to="/">
            <a href="" className="hover:underline">
              Home
            </a>
          </Link>
          <Link to="about">
            <a href="" className="hover:underline">
              About Us
            </a>
          </Link>

          <Link to="programs">
            <a href="" className="hover:underline">
              Programs
            </a>
          </Link>

          <Link to="fabClass">
            <a href="" className="hover:underline">
              Fab class
            </a>
          </Link>

          <Link to="ourServices">
            <a href="" className="hover:underline">
              Our services
            </a>
          </Link>

          <Link to="events">
            <a href="" className="hover:underline">
              Events
            </a>
          </Link>

          <Link to="getQuote">
            <a href="" className="hover:underline">
              Get a quote
            </a>
          </Link>
        </div>

        <div className="md:hidden text-4xl text-white ">
          <BiMenuAltRight />
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Nav;
