import React, { useEffect, useState } from "react";

const Partners = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5700);
    });
  }, []);

  const images = [
    "/aus-aid.png",
    "/billandmelinda.png",
    "/cisco.jpg",
    "/uk-aid.png",
    "/the-behavioural-insight-team.png",
  ];
  return (
    <div className="overflow-hidden h-[600px] bg-white pt-28 text-[#de0083]">
      <div className="font-bold text-5xl text-[#de0083] underline underline-offset-4 text-center pb-16 flex justify-center">
        <h1
          className={
            scroll
              ? "text-5xl font-bold title4 max-w-max hover:bg-[#de0083] hover:text-white"
              : "text-5xl font-bold max-w-max hover:bg-[#de0083] hover:text-white"
          }
        >
          Partners
        </h1>
      </div>

      <div className="marquee flex">
        {/* <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        > */}
        <div className="flex mx-auto bg-[rgb(245,245,245)] pt-16">
          {images.map((image) => {
            return (
              <div className="h-36 mx-10 cursor-pointer   w-48" key={image}>
                <img src={image} alt="img" className="rounded-xl" />
              </div>
            );
          })}
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Partners;
