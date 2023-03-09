import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const DesignandBehavioral = () => {
  return (
    <div className="min-h-screen text-lg">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
        Design and Behavioural Insights
         
        </h1>
        <div>
          <img src="/innovationfund.jpeg" height="200" alt="" />

          <div className=" w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold text-[#de0083] max-w-max mb-5">
            Hygiene and Behaviour Change Coalition 
            </h2>

            <p className="pt-10 pb-20 text-lg text-justify">
            In May 2020, BRAC was awarded a $4 million grant from the DFID-Unilever led <Link href="https://www.unilever.com/news/press-and-media/" className="underline text-[#de0083]"> Hygiene and Behaviour Change Coalition (HBCC)</Link> , to implement activities on the ground aimed at systematically change the hygiene practices of community members in response to the global COVID-19 pandemic. For this year-long project, we are partnering alongside BRAC <Link href="http://www.brac.net/program/water-sanitation-hygiene/" className="underline text-[#de0083]"> Water, sanitation and hygiene programme and Communications</Link>, and with <Link href="https://bigd.bracu.ac.bd/" className="underline text-[#de0083]"> BIGD</Link>  and <Link href="https://www.bi.team/" className="underline text-[#de0083]"> BITt</Link>  as behavioural-research partners, to design and implement interventions. Planned activities include setting up handwashing stations and broadcasting behaviourally-informed messaging. The aim of the project is to nudge communities to uptake and maintain long-term healthier hygiene and sanitation behaviours.

            </p>
            {/* <h2>Gallery</h2> */}
          </div>
        </div>

        <div>
          <img src="/market.jpg" height="200" alt="" className="design_image"/>

          <div className=" w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold text-[#de0083] max-w-max  mb-5">
            Using nudge to reduce sexual harassment in buses 

            </h2>

            <p className="pt-10 pb-20  text-lg text-justify">
            If <Link href="https://www.thedailystar.net/frontpage/public-transport-94pc-women-harassed-1544506" className="underline text-[#de0083]"> 94% of women travelling</Link>  on public transport experience harassment, how can we best intervene to reduce such an overwhelming problem? We, along with BRAC’s<Link href="http://www.brac.net/program/gender-justice-and-diversity/" className="underline text-[#de0083]"> Gender, Justice and Diversity</Link>   and the <Link href="https://www.behaviouralinsights.co.uk/" className="underline text-[#de0083]"> The Behavioural Insights Team</Link>  decided to collaborate to solve this pressing problem in metropolitan Dhaka. After months of intensive research to understand the experience of women navigating public spaces within the urban context and codesign, we launched our intervention! 

            </p>
            <p>
            <span className="text-[#de0083] font-bold">Learn more:</span><Link href="http://blog.brac.net/nudging-bystanders-to-fight-sexual-harassment-make-perpetrators-think-twice/" className="underline text-[#de0083]"> Nudging bystanders to fight sexual harassment: make perpetrators think twice. </Link>

            </p>
          </div>
        </div>
        
      </div>


      <div className="min-w-full mt-20">
        <Footer />
        <div className="bg-[#313131] flex text-white justify-center items-center h-[50px]">
          © 2022 BRAC. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default DesignandBehavioral;
