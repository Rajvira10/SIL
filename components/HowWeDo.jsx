import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HowWeDo = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2900);
    });
  }, []);
  return (
    <main id="howwedoit" className="bg-white pt-20 pb-10  w-11/12 md:w-9/12 mx-auto max-h-max">
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
      <div className="my-6">
        <h1 className="text-center text-3xl font-bold underline">Our Approach to Innovation</h1>
        <p className="text-xl py-3">Our guiding anchor is largely based on BRAC’s innovation ideals. ‘Innovation’ at BRAC means the development of a differentiated offering (or process) that empowers BRAC’s clients, partners and employees in a changing external context. 
        All that we do is anchored by our mantras of innovation.  
        Our approach to innovation can be easily understood by design, enterprise thinking, co-creation and frugal innovation components:
</p>
      </div>

      <div className="buttonhover flex flex-col md:flex-row w-full justify-around space-y-4 md:space-y-0 md:space-x-4 text-[#de0083] font-bold text-2xl mt-8  text-center">
        
      <div className="w-full border-4 border-[#de0083] py-4 px-5 rounded-xl cursor-pointer">
          <Link href="/design">Design <span></span><span></span><span></span><span></span><span></span><span></span></Link>
            
          </div>
        
        
          <div className="w-full border-4 border-[#de0083] py-4 px-5 rounded-xl cursor-pointer">
          <Link href="/enterprise-thinking">Enterprise Thinking <span></span><span></span><span></span><span></span><span></span><span></span></Link>
            
          </div>

        
        <div className="w-full border-4 border-[#de0083] py-4 px-5 rounded-xl cursor-pointer">
        <Link href="/co-creation">Co-creation <span></span><span></span><span></span><span></span><span></span><span></span></Link>
          
        </div>
        

        <div className="w-full border-4 border-[#de0083] py-4 px-5 rounded-xl cursor-pointer">
        <Link href="/frugal-innovation">Frugal Innovation           <span></span><span></span><span></span><span></span><span></span><span></span></Link>

        </div>
      </div>

    </main>
  );
};

export default HowWeDo;
