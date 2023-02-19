import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contactus" className="bg-[#212121] h-[300px] text-white">
      <h1 className="text-3xl pb-3 text-center pt-10">Contact Us</h1>
      <div className="flex w-11/12 md:w-7/12 mx-auto pt-6 justify-between items-center">
        <div className="flex flex-col flex-wrap max-w-fit">
          <p className="pb-1">
            Bangladesh/Headquarters: <br />
            BRAC Centre <br />
            75 Mohakhali,
            <br /> Dhaka-1212 Bangladesh
          </p>
          <p>Tel: 88 02 2222 81265. E-mail: info@brac.net</p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/">
            {" "}
            <img
              src="/whitelogo.png"
              onMouseOver={(e) => (e.currentTarget.src = "/logo.png")}
              onMouseOut={(e) => (e.currentTarget.src = "/whitelogo.png")}
              width={200}
              height={200}
              alt=""
              className="cursor-pointer"
            />
          </Link>

          <div className="flex items-center justify-center space-x-3 mt-5">
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
