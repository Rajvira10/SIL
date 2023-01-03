import React, { useEffect, useState } from "react";
import Card from "./Card";

const WhatWeDo = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      setScroll(window.scrollY > 2000);
    });
  }, []);
  return (
    <div className="bendybg  mt-10 w-11/12 mx-auto flex flex-col item-center justify-center">
      <span className="font-bold text-5xl text-white underline underline-offset-4 text-center pb-2 flex justify-center">
        <h1
          className={
            scroll
              ? "hover:text-[#de0083] title2 max-w-max hover:bg-white"
              : "hover:text-[#de0083]  max-w-max hover:bg-white"
          }
        >
          What We Do
        </h1>
      </span>
      <div className="flex max-w-fit mx-auto pt-16 space-x-12">
        <Card
          title="Crowdsourcing Innovation"
          para="Incubating, adapting and mainstreaming innovations."
        />
        <Card
          title="Programme Collaboration"
          para="Creating space for knowledge and partnerships."
        />
        <Card
          title="Design and Behavioural Insights"
          para="Generating quick insights to foster impact driven innovation."
        />
        <Card
          title="Moonshots"
          para="Redesigning models and services putting people first."
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
