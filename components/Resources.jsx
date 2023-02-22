import React from "react";
import { RiBookletFill } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import Link from "next/link";

const Resources = () => {
  return (
    <div className=" bg-[rgb(77,79,83)]  max-h-max mt-20 resources">
      <hr className="h-2 bg-[#de0083]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10 xl:grid-cols-4 w-10/12 mx-auto">
        <Link href="https://innovation.brac.net/mobile-money/">
        <div className="py-20 shadow-xl bg-[rgb(220,220,220)] cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#de0083]  rounded-lg text-[#de0083] border-2 border-[#de0083]">
            <div className="text-6xl ">
              <RiBookletFill />
            </div>

            <h1 className="text-lg font-bold">Mobile Money </h1>
          </div>
        </Link>
        <Link
          href="/failurereport.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="py-20  shadow-xl bg-[rgb(220,220,220)] cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#de0083]  rounded-lg text-[#de0083] border-2 border-[#de0083]">
            <div className="text-6xl ">
              <MdReportProblem />
            </div>
            <h1 className="text-lg font-bold">Failure Reports</h1>
          </div>
        </Link>
      <Link href="#">
        <div className="py-20  shadow-xl bg-[rgb(220,220,220)] cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#de0083]  rounded-lg  text-[#de0083] border-2 border-[#de0083] ">
          <div className="text-6xl ">
            <FaToolbox />
          </div>
          <h1 className="text-lg font-bold">Toolkits</h1>
        </div>
        </Link>
        <Link href="#">
        <div className="py-20 shadow-xl bg-[rgb(220,220,220)] cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#de0083]  rounded-lg  text-[#de0083] border-2 border-[#de0083] ">
          <div className="text-6xl ">
            <FiTarget />
          </div>
          <h1 className="text-lg font-bold">Impact Reports</h1>
        </div>
        </Link>
      </div>
      <hr className="h-2 bg-[#de0083] border-none mt-16" />
    </div>
  );
};

export default Resources;
