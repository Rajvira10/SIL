import Link from "next/link";
import React from "react";

const Quote = () => {
  return (
    <div className="bg-[rgb(245,245,245)]  py-28 my-20">
      <article className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12  mx-auto text-3xl leading-normal">
        A world{" "}
        <span className="title5 font-bold underline decoration-[#de0083] underline-offset-8 hover:bg-[#de0083] duration-1000">
          free from all forms of exploitation and discrimination{" "}
        </span>
        where everyone has the opportunity to realise their potential. We align
        ourselves with the broader organisational vision of BRAC of{" "}
        <span className="title5 font-bold underline decoration-[#de0083] underline-offset-8 hover:bg-[#de0083] duration-1000">
          reaching 20 million people globally by the end of next decade.
        </span>{" "}
        We are constantly collaborating with programmes and social enterprises
        to{" "}
        <span className="title5  font-bold underline decoration-[#de0083] underline-offset-8 hover:bg-[#de0083] duration-1000">
          improve programme design, service delivery modalities, product
          development and client experience
        </span>{" "}
        to serve the people we work for.
        <Link href="https://www.brac.net/partnership#partners">
          <div className="text-black flex items-center pt-8  partner">
            <div className="text-[28px] font-bold hover:text-[#de0083] duration-300 underline underline-offset-4">
              Partner With Us
            </div>
            <svg
              width="18px"
              height="17px"
              viewBox="7 0 18 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <polygon
                  className="arrow"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <polygon
                  className="arrow-fixed"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
              </g>
            </svg>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default Quote;
