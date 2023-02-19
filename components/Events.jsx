import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const Events = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 4700);
    });
  }, []);

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  const images = [
    "/fif2022.jpg",
    "/fif2022.jpg",
    "/fif2022.jpg",
    "/fif2022.jpg",
    "https://via.placeholder.com/210?text=2",
    "https://via.placeholder.com/220?text=3",
    "https://via.placeholder.com/280?text=4",
    "https://via.placeholder.com/270?text=5",
    "https://via.placeholder.com/250?text=6",
    "https://via.placeholder.com/220?text=7",
    "https://via.placeholder.com/250?text=8",
    "https://via.placeholder.com/270?text=9",
    "https://via.placeholder.com/290?text=10",
  ];
  return (
    <div className="h-[730px]  bg-[rgb(77,79,83)]   mx-auto">
      <hr className="bg-[#de0083] pt-2" />
      <div className="pt-28"></div>
      <div className="w-11/12 mx-auto">
        <div className="font-bold text-5xl text-[#de0083] underline underline-offset-4 text-center pb-2 flex justify-center">
          <h1
            className={
              scroll
                ? "text-5xl font-bold title4 max-w-max hover:bg-[#de0083] hover:text-white"
                : "text-5xl font-bold max-w-max hover:bg-[#de0083] hover:text-white"
            }
          >
            Events
          </h1>
        </div>
        <h2 className="text-xl text-white font-thin text-center pt-3">
          Discover Our Events
        </h2>
        <div className="flex w-4/5 mx-auto overflow-x-scroll space-x-5 whatwedo-scroll pb-5">
          {images.map((image) => {
            return (
              <div className="item basis-1/3" key={image}>
                <img src={image} alt="img" className="object-cover relative" />
                <Link href="https://innovation.brac.net/fif2022/">
                  <div className="absolute text-inside bottom-10 text-center w-full z-20 text-white ">
                    <h1 className="font-bold text-xl hover:underline hover:underline-offset-4">
                      Frugal Innovation Forum 2022
                    </h1>
                    <p>11 October - 13 October</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <motion.div
          ref={carousel}
          className="carousel overflow-x-hidden relative"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel space-x-5"
          >
            {images.map((image) => {
              return (
                <div className="item basis-1/3" key={image}>
                  <img
                    src={image}
                    alt="img"
                    className="object-cover relative"
                  />
                  <Link href="https://innovation.brac.net/fif2022/">
                    <div className="absolute text-inside bottom-10 text-center w-full z-20 text-white ">
                      <h1 className="font-bold text-xl hover:underline hover:underline-offset-4">
                        Frugal Innovation Forum 2022
                      </h1>
                      <p>11 October - 13 October</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </motion.div> */}
      </div>
      <div className="pt-[7.3rem]"></div>
      <hr className="bg-[#de0083] pt-5 border-none" />
    </div>
  );
};

export default Events;
