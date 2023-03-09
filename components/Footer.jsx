import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contactus" className="bg-[#212121] max-h-max text-white">
      <h1 className="text-3xl pb-3 text-center pt-10">Contact Us</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-11/12 md:w-9/12 mx-auto py-6 items-center">
        <div className="flex flex-col flex-wrap">
          <p className="pb-1">
            Bangladesh/Headquarters: <br />
            BRAC Centre <br />
            75 Mohakhali,
            <br /> Dhaka-1212 Bangladesh
          </p>
          <p>Tel: 88 02 2222 81265. E-mail: info@brac.net</p>
        </div>
        <div className="flex-col flex justify-center items-center">
      <h2 className="text-white text-xl pb-2 font-extralight">
        Stay informed - subscribe to our newsletter
      </h2>
      <input
        type="text"
        placeholder="Enter your email address..."
        className="w-full rounded-lg mt-2 py-2 italic text-lg px-5 border-none outline-none"
      />
      <button className="bg-[rgb(77,79,83)] text-white mt-4 rounded px-6 py-2 hover:bg-[rgb(43,44,46)]">
        SUBSCRIBE
      </button>
    </div>
        <div className="flex flex-col items-center col-span-2 md:col-span-1 mb-5 md:mb-0">
          <div className="flex  items-center justify-center space-x-3 mt-5">
            <Link href="https://www.facebook.com/BRACWorld/">
              {" "}
              <div className="hover:text-[#de0083] text-4xl cursor-pointer">
                <FaFacebookSquare />
              </div>
            </Link>

            <Link href="https://twitter.com/bracworld">
              {" "}
              <div className="hover:text-[#de0083] text-4xl cursor-pointer">
                {" "}
                <FaTwitterSquare />
              </div>
            </Link>

            <Link href="https://www.youtube.com/bracworld">
              {" "}
              <div className="hover:text-[#de0083] text-4xl cursor-pointer">
                {" "}
                <FaYoutube />
              </div>
            </Link>

            <Link href="https://www.linkedin.com/company/brac/mycompany/verification/">
              {" "}
              <div className="hover:text-[#de0083] text-4xl cursor-pointer">
                {" "}
                <FaLinkedin />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
