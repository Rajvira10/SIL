import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import motion from "framer-motion";

const items = [{
  id:1,
  title: "Crowdsourcing Innovation",
  title: "Crowdsourcing Innovation",
  link: "/crowdsourcing",
  para: "Incubating, adapting and mainstreaming innovations.",
  back: "The Frugal Innovation Forum is the biggest international conference of BRAC where we explore what has worked and what hasn’t, what to improve and what needs to be done, and where to go from here (and who to partner with). This helps the broader development sector audience to address critical discussions and work toward closing the remaining gaps in a sustainable, cost-effective way."    
},
{
  id: 2,
  title: "Programme Collaboration",
  link: "/collaboration",
  para: "Creating space for knowledge and partnerships.",
  back: "In the context of Bangladesh, the rapid adoption of mobile money has created exciting opportunities to accelerate financial inclusion for people living in poverty, and particularly women."        
},
{
  id: 3,
  title: "Design and Behavioural Insights",
  link: "/design",
  para: "Generating quick insights to foster impact driven innovation.",
  back: "In May 2020, BRAC was awarded a $4 million grant from the DFID-Unilever  Hygiene and Behaviour Change Coalition (HBCC), to implement activities on the ground aimed at systematically change the hygiene practices of community members in response to the global COVID-19 pandemic. For this year-long project, we are partnering alongside BRAC"        
},
{
  id: 4,
  title: "Moonshots",
  link: "/moonshots",
  para: "Redesigning models and services putting people first.",
  back: "An inclusive youth platform to develop active, enlightened, skillful and empathetic citizens for tomorrow, through a comprehensive package of 21st century skills training and community service projects. The platform also includes access to a larger network of partners and like-minded youth groups for future opportunities."        
}  
]

const WhatWeDo = () => {
  const [scroll, setScroll] = useState(false);
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      setScroll(window.scrollY > 2000);
    });
    
  }, []);

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  
  return (
    <div id="whatwedo" className="bendybg w-11/12 mx-auto flex flex-col item-center justify-center">
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
      <div className="flex w-10/12 mx-auto pt-16 pb-3  space-x-12 overflow-x-scroll overflow-y-hidden whatwedo-scroll">
        <Card
          title="Crowdsourcing Innovation"
          link="/crowdsourcing-innovation"
          para="Incubating, adapting and mainstreaming innovations."
          back="The Frugal Innovation Forum is the biggest international conference of BRAC where we explore what has worked and what hasn’t, what to improve and what needs to be done, and where to go from here (and who to partner with). This helps the broader development sector audience to address critical discussions and work toward closing the remaining gaps in a sustainable, cost-effective way."
        />
        <Card
          title="Programme Collaboration"
          link="/program-collaboration"
          para="Creating space for knowledge and partnerships."
          back="In the context of Bangladesh, the rapid adoption of mobile money has created exciting opportunities to accelerate financial inclusion for people living in poverty, and particularly women."
        />
        <Card
          title="Design and Behavioural Insights"
          link="/design-and-behavioral-insights"
          para="Generating quick insights to foster impact driven innovation."
          back="In May 2020, BRAC was awarded a $4 million grant from the DFID-Unilever  Hygiene and Behaviour Change Coalition (HBCC), to implement activities on the ground aimed at systematically change the hygiene practices of community members in response to the global COVID-19 pandemic. For this year-long project, we are partnering alongside BRAC"
        />
        <Card
          title="Moonshots"
          link="/moonshots"
          para="Redesigning models and services putting people first."
          back="An inclusive youth platform to develop active, enlightened, skillful and empathetic citizens for tomorrow, through a comprehensive package of 21st century skills training and community service projects. The platform also includes access to a larger network of partners and like-minded youth groups for future opportunities."
        />
                <Card
          title="Incubation"
          link="/incubation"
          para="Redesigning models and services putting people first."
          back="Launched in October 2021, the STITCH for RMG: Global Innovation Challenge has finally come to an end after three-month-long rigorous competition to crowdsource innovations that can safeguard the livelihood of Bangladeshi women garment workers of the RMG industry. BRAC, H&M Foundation, and The Asia Foundation announced the six winners last Tuesday, 7 February 2022"
          />
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
            {items?.map((item) => {
              return (
                <div key={item.id}>
                    <Card
                      title={item.title}
                      link= {item.link}
                      para= {item.para}
                      back= {item.back}/>
                </div>
              );
            })}
          </motion.div>
        </motion.div> */}
    </div>
  );
};

export default WhatWeDo;
