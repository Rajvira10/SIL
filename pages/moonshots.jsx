import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const Moonshots = () => {
  return (
    <div className="min-h-screen text-lg ">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
        Moonshots 
        </h1>
        <div>
          <img src="/amranotunnetwork.JPG" alt="" />

          <div className=" w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold title4 max-w-max hover:bg-[#de0083] hover:text-white mb-5">
            Amra Notun Network
            </h2>

            <p className="pt-10  text-lg text-justify">
            An inclusive youth platform to develop active, enlightened, skillful and empathetic citizens for tomorrow, through a comprehensive package of 21st century skills training and community service projects. The platform also includes access to a larger network of partners and like-minded youth groups for future opportunities.
            </p>
            <h3 className="text-3xl font-bold mt-4">Approach to Project</h3>
            <p className="pb-20 text-lg text-justify">We are following a five-tier mode of operation:
                <br />
                1. Recruit 30 youngsters for each club
                <br />
                2. Train them on interpersonal skills
                <br />
                3. Deploy them to work on local problems
                <br />
                4. Tag them with local mentors for guidance
                <br />
                5. Track their work progress to award the best performers
                <br />
                Amra Notun Network is scaling up to eventually reach over 20,000 youth changemakers by 2022, from all of the 64 districts within the country. </p>


            
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

export default Moonshots;
