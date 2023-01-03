import Image from "next/image";
import React, { useEffect, useState } from "react";

const WhoWeAre = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 550 && window.scrollY < 1000);
    });
  }, []);
  return (
    <main className=" bg-white pt-32 pb-20 md:w-8/12 xl:7/12 mx-auto">
      <div className="font-bold text-5xl text-[#de0083] underline underline-offset-4 text-center pb-10 flex justify-center ">
        <h1
          className={
            scroll
              ? "text-5xl font-bold title4 max-w-max hover:bg-[#de0083] hover:text-white"
              : "text-5xl font-bold max-w-max hover:bg-[#de0083] hover:text-white"
          }
        >
          Who We Are
        </h1>
      </div>
      <div className="flex items-center justify-between space-x-10 min-h-96">
        <div className="basis-1/2 flex-1">
          <article className="text-justify pt-10 text-xl">
            Our mission is to support BRAC’s work of empowering people and
            communities in situations of poverty, low literacy, disease and
            social injustice. We test, prototype and adapt and collaborate with
            programmes to achieve large scale, positive changes in the
            communities that we work in. In line with BRAC’s economic and social
            programmes that work to create opportunities for everyone to realise
            their potential, we incubate, adapt and mainstream innovation within
            and outside BRAC by generating quick insights and redesigning
            service delivery models. Putting people at the core of what we do is
            our principle.
          </article>
        </div>
        <div className="basis-1/2 whoweare flex-1">
          <Image
            src="/FIF.jpg"
            width={1000}
            height={500}
            alt="who we are"
            className="rounded-3xl"
          />
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
