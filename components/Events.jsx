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
  const infos = [
    {
      image: "/fif2022.jpg",
      title: "Frugal Innovation Forum 2022",
      date: "11-13 October 2022",
      link: "https://innovation.brac.net/fif2022/",
    },
    {
      image: "/fif2022.jpg",
      title: "Runway to Frugal Innovation 2022",
      date: "17-19 May 2022",
      link: "https://innovation.brac.net/fif2022/",
    },
    {
      image: "/fif2022.jpg",
      title: "Frugal Innovation Forum 2019",
      date: "2-4 March 2019",
      link: "https://innovation.brac.net/fif2019/",
    },
    {
      image: "/fif2022.jpg",
      title: "Frugal Innovation Forum 2017",
      date: "9-11 October 2017",
      link: "https://innovation.brac.net/fif2017/",
    },
    {
      image: "/fif2022.jpg",
      title: "Frugal Innovation Forum 2016",
      date: "22-24 March 2016",
      link: "https://innovation.brac.net/fif2016/",
    },
    {
      image: "/fif2022.jpg",
      title: "Frugal Innovation Forum 2015",
      date: "23-24 March 2015",
      link: "https://innovation.brac.net/fif2015/",
    },
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
          {infos.map((info) => {
            return (
              <div className="item min-h-[600px] basis-1/3" key={info.title}>
                <img src={info.image} alt="img" className="object-cover relative" height="400px" />
                <Link href={info.link}>
                  <div className="absolute text-inside bottom-10 text-center w-full z-20 text-white ">
                    <h1 className="font-bold text-xl hover:underline hover:underline-offset-4">
                      {info.title}
                    </h1>
                    <p>{info.date}</p>
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
