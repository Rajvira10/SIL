import React from "react";
import { RiBookletFill } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import Link from "next/link";

const Resources = () => {
  return (
    <div className=" bg-[rgb(245,245,245)]  h-[400px] mt-20">
      <div className="flex justify-between pt-20 items-center w-8/12 mx-auto">
        <Link href="https://innovation.brac.net/mobile-money/">
          <div className="shadow-xl cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#ec008c] w-60 h-60 rounded-lg duration-500 text-[#ec008c] border-2 border-[#ec008c] ">
            <div className="text-6xl ">
              <RiBookletFill />
            </div>

            <h1 className="text-lg font-bold">Mobile Money Booklets</h1>
          </div>
        </Link>
        <Link
          href="/failurereport.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-xl cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#ec008c] w-60 h-60 rounded-lg duration-500 text-[#ec008c] border-2 border-[#ec008c]">
            <div className="text-6xl ">
              <MdReportProblem />
            </div>
            <h1 className="text-lg font-bold">Failure Reports</h1>
          </div>
        </Link>

        <div className="shadow-xl cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#ec008c] w-60 h-60 rounded-lg duration-500 text-[#ec008c] border-2 border-[#ec008c] ">
          <div className="text-6xl ">
            <FaToolbox />
          </div>
          <h1 className="text-lg font-bold">Toolkits</h1>
        </div>
        <div className="shadow-xl cursor-pointer flex flex-col hover:text-white hover:underline justify-center items-center space-y-5 hover:bg-[#ec008c] w-60 h-60 rounded-lg duration-500 text-[#ec008c] border-2 border-[#ec008c] ">
          <div className="text-6xl ">
            <FiTarget />
          </div>
          <h1 className="text-lg font-bold">Impact Reports</h1>
        </div>
      </div>
    </div>
  );
};

export default Resources;
