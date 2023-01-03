import HowWeDo from "../components/HowWeDo";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";
import Events from "../components/Events";
import Partners from "../components/Partners";
import Resources from "../components/Resources";
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <title>Social Innovation Lab</title>
      <div className="hero min-h-screen">
        <Navbar />

        <div className="absolute text-xl bottom-28 left-2/3 py-20 leading-relaxed px-20  text-white bg-[rgba(222,0,131,0.5)] rounded-xl">
          <h1 className="text-center text-4xl pb-10">Now Trending</h1>
          <Link href="https://innovation.brac.net/fif2022">
            <div className="underline">Frugal Innovation Forum 2022</div>
          </Link>
          <Link href="https://innovation.brac.net/wp-content/uploads/2022/09/Outcome-Report_Runway-to-FIF-2022.pdf">
            <div className="underline">Outcome Report: Runway to FIF 2022</div>
          </Link>
          <Link href="https://innovation.brac.net/wp-content/uploads/2022/08/Failure-report-2020-21.pdf">
            <div className="underline">Failure Report 2020-21</div>
          </Link>
          <Link href="https://innovation.brac.net/wp-content/uploads/2021/11/COVID-19-Innovation-During-Emergency.pdf">
            <div className="underline">Innovation during emergency</div>
          </Link>
          <Link href="https://innovation.brac.net/inclusion-fellowship/">
            <div className="underline">BRAC Inclusion Fellowship</div>
          </Link>
          <Link href="https://innovation.brac.net/mobile-money/">
            <div className="underline">Mobile money booklet</div>
          </Link>
        </div>
      </div>
      <div className="bg-[#de0083] w-full h-[60px] flex justify-center items-center text-white text-4xl font-bold">
        {" "}
        Social Innovation Lab
      </div>
      <WhoWeAre />
      <Quote />
      <WhatWeDo />
      <HowWeDo />
      <Resources />
      <Stories />
      <Events />
      <Partners />
      <Footer />
      <div className="bg-[#313131] flex text-white justify-center items-center h-[50px]">
        © 2022 BRAC. All Rights Reserved.
      </div>
    </main>
  );
}
