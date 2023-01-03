import Image from "next/image";
import React, { useEffect, useState } from "react";

const HowWeDo = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2900);
    });
  }, []);
  return (
    <main className="bg-white pt-32  w-7/12 mx-auto h-[650px]">
      <div className="font-bold text-5xl text-center pb-5 flex justify-center ">
        <h1
          className={
            scroll
              ? "text-5xl font-bold title4 max-w-max hover:bg-[#de0083] hover:text-white"
              : "text-5xl font-bold text-[#de0083] underline max-w-max hover:bg-[#de0083] hover:text-white"
          }
        >
          How We Do It
        </h1>
      </div>
      <div className="pt-16 flex space-x-10 items-center">
        <div className="h-[300px] w-full space-y-12 basis-1/2">
          <div className="flex items-center">
            <div className="bg-[#de0083] h-16 w-16 min-w-[64px] rounded-full mr-5"></div>
            <div>
              <h2 className="font-bold text-xl pb-2">Simplify</h2>
              <p>
                We seek to understand our users and what drives them to frame
                the problem we will be working to solve.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#de0083] h-16 w-16 min-w-[64px] rounded-full mr-5"></div>
            <div>
              <h2 className="font-bold text-xl pb-2">Ideate</h2>
              <p>
                We make sense of what we have found and identify opportunities
                for testing.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#de0083] h-16 w-16 min-w-[64px] rounded-full mr-5"></div>
            <div>
              <h2 className="font-bold text-xl pb-2">Learn</h2>
              <p>
                We bring our ideas to life, and test to evaluate what can be
                viable.
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/howwedoit.png"
          width={500}
          height={100}
          alt=""
          className="basis-1/2"
        />
      </div>
    </main>
  );
};

export default HowWeDo;
