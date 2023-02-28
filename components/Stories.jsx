import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Thumbnail = ({ content, image, index }) => {
  return (
    <div className="thumbnail flex-wrap">
      {content.map((item, i) => (
        <img
          key={i}
          src={item.img}
          alt=""
          onMouseEnter={() => image(i)}
          onClick={() => image(i)}
          className={index === i ? "active" : ""}
        />
      ))}
    </div>

  );
};

const Slideshow = ({ content }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index < content.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(content.length - 1);
    }
  };
  return (
    <div className="slideshow">
      <div className="relative">
      <Link href={content[index].url}>
        <div className="absolute z-10 bottom-[50px] pl-10 py-10  text-white w-full">
          <div className="text-2xl font-bold underline underline-offset-2">
            {content[index].title}
          </div>

          <div className="date text-xs my-2 cursor-pointer">
            {content[index].date}
          </div>
        </div>
      </Link>
      <div className="hello border-[#de0083] border-8">
        <Link href={content[index].url}>
          <Image
            src={content[index].img}
            alt=""
            height={500}
            width={2000}
            className="mainImg object-cover mb-5 relative "
          />
        </Link>
      </div>

      <div className="actions z-20">
        <button onClick={prev} className="text-white">
          <AiOutlineArrowLeft />
        </button>
        <button onClick={next} className="text-white">
          <AiOutlineArrowRight />
        </button>
      </div>
      </div>
      <Thumbnail content={content} image={setIndex} index={index} />
    </div>
  );
};
const Stories = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 3900);
    });
  }, []);
  return (
    <main id="blogs" className="bg-[rgb(245,245,245)]">
      <div className="h-auto pt-28 w-11/12 md:w-10/12 bg-white mx-auto pb-20 text-black">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center underline underline-offset-4 text-[#de0083] justify-between">
            <h1
              className={
                scroll
                  ? " text-5xl font-bold title4 max-w-max hover:bg-[#de0083] hover:text-white pb-2"
                  : "text-5xl font-bold max-w-max hover:bg-[#de0083] hover:text-white pb-2"
              }
            >
              Stories
            </h1>
            <Link href="https://innovation.brac.net/blog/">
              <h2 className="story font-bold flex items-center cursor-pointer hover:scale-110 hover:font-bold duration-300">
                <span className="underline">Read More Stories</span>
                <span className="text-[#de0083] m-0">
                  <BiArrowToRight />
                </span>
              </h2>
            </Link>
          </div>
          <p className="pt-6 text-black">
            Read the latest stories, research and news from <br /> across the
            foundation
          </p>
          {/* <div className="pt-20 flex">
          <div className=" flex flex-col space-y-5 h-[650px] basis-7/12">
            <div className="h-[500px] relative shadow-2xl">
              <Image
                src="/blog1.jpg"
                className="object-cover object-center rounded"
                layout="fill"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl mb-2 bottom cursor-pointer max-w-fit">
                Digital wages and what it means for women
              </h2>
              <p className="text-slate-200 text-xs font-light">
                February 19, 2020
              </p>
            </div>
          </div>
          {/* <div className="w-full overflow-x-scroll h-92">
            <div className="flex">
              <div className="h-[250px] relative basis-1/2">
                <Image
                  src="/blog3.jpg"
                  className="object-cover object-center"
                  layout="fill"
                  alt=""
                />
              </div>
              <div className="h-[250px] relative basis-1/2">
                <Image
                  src="/blog3.jpg"
                  className="object-cover object-center"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
          </div> */}
          {/*<div className="basis-5/12 space-y-12 pl-24">
            <div className=" flex flex-col space-y-5 h-[300px]">
              <div className="h-[450px] relative">
                <Image
                  src="/blog3.jpg"
                  className="object-cover object-center rounded"
                  layout="fill"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl mb-2 bottom cursor-pointer max-w-fit">
                  Tackling a process innovation challenge 101
                </h2>
                <p className="text-slate-200 text-xs font-light">
                  January 19, 2020
                </p>
              </div>
            </div>
            <div className=" flex flex-col space-y-5 h-[300px]">
              <div className="h-[450px] relative">
                <Image
                  src="/blog2.jpg"
                  className="object-cover object-center rounded"
                  layout="fill"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl mb-2 bottom cursor-pointer max-w-fit">
                  End gender-based violence: Integrated approaches from around
                  the world
                </h2>
                <p className="text-slate-200 text-xs font-light">
                  December 5, 2019
                </p>
              </div>
            </div>
          </div>
        </div> */}
          <div className="slideshowstories mt-10">
            {" "}
            <Slideshow
              content={[
                {
                  date: "February 19, 2020",
                  title: "Digital wages and what it means for women",
                  img: "/blog1.jpg",
                  url: "https://blog.brac.net/digital-wages-and-what-it-means-for-women/",
                },
                {
                  date: "January 19, 2020",
                  title: "Tackling a process innovation challenge 101",
                  img: "/blog2.jpg",
                  url: "https://blog.brac.net/tackling-a-process-innovation-challenge-101/",
                },
                {
                  date: "December 05, 2019",
                  title:
                    "End gender-based violence: Integrated approaches from around the world",
                  img: "/blog3.jpg",
                  url: "https://blog.brac.net/end-gender-based-violence-integrated-approaches-from-around-the-world/",
                },
                {
                  date: "November 26, 2019",
                  title: "Digital cash: The future of humanitarian response?",
                  img: "/blog4.jpg",
                  url: "https://blog.brac.net/digital-cash-the-future-of-humanitarian-response/",
                },
                {
                  date: "October 23, 2019",
                  title:
                    "Taking on tech: 3 stages that every NGO needs to know",
                  img: "/blog5.jpg",
                  url: "https://blog.brac.net/taking-on-tech-3-stages-that-every-ngo-needs-to-know/",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stories;
