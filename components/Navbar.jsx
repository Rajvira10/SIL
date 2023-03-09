import {GiHamburgerMenu} from 'react-icons/gi';
// import a from "next/a";
import React, { useState,useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';



const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isblogOpen, setIsblogOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 700);
    });
  }, []);

  

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleBlog = () => {
    setIsblogOpen(!isblogOpen);
  };

  return (
    <nav className={scroll? "z-50 fixed bg-[rgba(0,0,0,0.5)] top-0":"z-50 fixed"}>
      <div className={`flex items-center space-x-5 justify-between min-h-full w-10/12 mx-auto ${scroll? "py-3":"py-5"}`}>
        <div className="logo cursor-pointer ">
          {scroll?          <img
          className='hover:scale-105 duration-300'
            src="/whitelogo.png"
            width={120}
            height={120}
            alt=""
          /> :          <img
            src="/whitelogo.png"
            onMouseOver={(e) => (e.currentTarget.src = "/logo.png")}
            onMouseOut={(e) => (e.currentTarget.src = "/whitelogo.png")}
            width={120}
            height={120}
            alt=""
          />}

        </div>
        <ul className={`hidden lg:flex lg:items-center lg:justify-center space-x-8`}>

          <Link href="/" scroll={false}>
            <li className={scroll?"cursor-pointer text-white lg:text-base xl:text-xl" :"cursor-pointer text-white hover:text-[#de0083] lg:text-base xl:text-xl"}>
              Home
            </li>
          </Link>
          <Link href="/#whoweare" scroll={false}> 
            <li className={scroll?"cursor-pointer text-white lg:text-base xl:text-xl" :"cursor-pointer text-white hover:text-[#de0083] lg:text-base xl:text-xl"}>
              Who We Are
            </li>
          </Link>
          <Link href="/#whatwedo" scroll={false}>
            <li className={scroll?"cursor-pointer text-white lg:text-base xl:text-xl" :"cursor-pointer text-white hover:text-[#de0083] lg:text-base xl:text-xl"}>
              What We Do
            </li>
          </Link>
          <Link href="/#howwedoit" scroll={false}>
            <li className={scroll?"cursor-pointer text-white lg:text-base xl:text-xl" :"cursor-pointer text-white hover:text-[#de0083] lg:text-base xl:text-xl"}>
              How We Do It
            </li>
          </Link>
          <Link href="/#partners" scroll={false}>
            <li className={scroll?"cursor-pointer text-white lg:text-base xl:text-xl" :"cursor-pointer text-white hover:text-[#de0083] lg:text-base xl:text-xl"}>
              Partners
            </li>
          </Link>
            <li className={scroll?" relative cursor-pointer text-white lg:text-base xl:text-xl" :"relative cursor-pointer text-white hover:text-[#de0083] lg:text-base xl:text-xl"}>
              Blogs 
              <div className="hidden absolute top-full left-1/2 transform -translate-x-1/2 duration-150 ">
                <Link href="https://innovation.brac.net/blog/"><div className="bg-white mt-1 px-4 py-2 shadow-md text-[#de0083] text-sm">Silverlining</div></Link> 
                <Link href="https://medium.com/brac-social-innovation-lab"><div className="bg-white px-4 py-2 shadow-md mt-1 text-[#de0083] text-sm">Medium</div></Link>
              </div>
            </li>
          <Link href="/#contactus" scroll={false}>
            <li className={scroll?"cursor-pointer text-white lg:text-base xl:text-xl" :"cursor-pointer text-white hover:text-[#de0083] lg:text-base xl:text-xl"}>
              Contact Us
            </li>
          </Link>
        </ul>
        <div className="hamburger z-60 md:block lg:hidden text-white text-3xl cursor-pointer" onClick={toggleNav}><GiHamburgerMenu/></div>
      </div>

      
      <div className={`bg-[#de0083] z-20 w-[300px] duration-500 h-screen fixed   ${isNavOpen ? "top-0 right-0" : "top-0 -right-80"}`}>
          <div className="flex items-center justify-center h-full">
            <ul className="flex flex-col justify-center space-y-10 max-h-[20vh] divide-y-2 divide-y-reverse">
              <div className='absolute right-12 top-[3.4rem] text-white text-4xl cursor-pointer' onClick={toggleNav}> <IoCloseSharp/></div>
              <Link href="/" scroll={false} onClick={toggleNav}>
                <li className="cursor-pointer text-white  text-2xl">
                  Home
                </li>
              </Link>
              <Link href="/#whoweare" scroll={false} onClick={toggleNav}> 
                <li className="cursor-pointer text-white  text-2xl">
                  Who We Are
                </li>
              </Link>
              <Link href="/#whatwedo" scroll={false} onClick={toggleNav}>
                <li className="cursor-pointer text-white  text-2xl">
                  What We Do
                </li>
              </Link>
              <Link href="/#howwedoit" scroll={false} onClick={toggleNav}>
                <li className="cursor-pointer text-white  text-2xl">
                  How We Do It
                </li>
              </Link>
              <Link href="/#partners" scroll={false} onClick={toggleNav}>
                <li className="cursor-pointer text-white text-2xl">
                  Partners
                </li>
              </Link>
              <div scroll={false} onClick={toggleBlog}>
                <li className="relative cursor-pointer text-white text-2xl">
                  <div onClick={toggleBlog}>Blogs</div>
                </li>
              </div>
              {isblogOpen && (
                <Link href="https://innovation.brac.net/blog/" scroll={false} onClick={toggleNav}>
                  <li className="relative cursor-pointer text-white text-2xl">
                    <div className='font-sm'>Silverlining</div>
                  </li>
                </Link>
              )}
              {isblogOpen && (
                <Link href="https://medium.com/brac-social-innovation-lab" scroll={false} onClick={toggleNav}>
                  <li className="relative cursor-pointer text-white text-2xl">
                    <div className='font-sm'>Medium</div>
                  </li>
                </Link>
              )}              
              <Link href="/#contactus" scroll={false} onClick={toggleNav}>
                <li className="cursor-pointer text-white  text-2xl">
                  Contact Us
                </li>
              </Link>
              </ul>
              </div>
              </div>
           
    </nav>
  );
};

export default Navbar;
