import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="z-50">
      <div className="flex items-center justify-between min-h-full w-9/12 mx-auto py-5">
        <div className="logo cursor-pointer ">
          <img
            src="/whitelogo.png"
            onMouseOver={(e) => (e.currentTarget.src = "/logo.png")}
            onMouseOut={(e) => (e.currentTarget.src = "/whitelogo.png")}
            width={120}
            height={120}
            alt=""
          ></img>
        </div>
        <ul className="flex space-x-8">
          <Link href="/">
            <li className="cursor-pointer text-white hover:text-[#de0083]">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer text-white hover:text-[#de0083]">
              What We Are
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer text-white hover:text-[#de0083]">
              What We Do
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer text-white hover:text-[#de0083]">
              How We Do It
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer text-white hover:text-[#de0083]">
              Partners
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer text-white hover:text-[#de0083]">
              Blogs
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer text-white hover:text-[#de0083]">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
