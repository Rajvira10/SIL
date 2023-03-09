import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const Collaboration = () => {
  return (
    <div className="min-h-screen text-lg">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
          Programme Collaboration
        </h1>
        <div>
          <img src="/innovationfund.jpeg" height="200" alt="" />

          <div className="w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold text-[#de0083] max-w-max mb-5">
            Innovation Fund
            </h2>

            <p className="pt-10 pb-20 text-lg text-justify">
            In the context of Bangladesh, the rapid adoption of mobile money has created exciting opportunities to accelerate financial inclusion for people living in poverty, and particularly women. BRAC believes there is a tremendous opportunity to use mobile money to innovate, better serve our clients, and become more efficient as an organisation. Since 2013, the Social Innovation Lab has partnered with the Bill & Melinda Gates Foundation through the Innovation Fund for <Link href="https://innovation.brac.net/mobile-money/" className="underline text-[#de0083]"> Mobile Money project</Link>   to explore the integration of mobile money across our programmes and internal operation platforms.
            </p>
            {/* <h2>Gallery</h2> */}
          </div>
        </div>

        <div>
          <img src="/market.jpg" height="200" alt="" />

          <div className="w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold text-[#de0083] max-w-ma mb-5">
            Improving the go-to-market of a social enterprise providing land-based legal service 

            </h2>

            <p className="pt-10 pb-20  text-lg text-justify">
            We worked closely with a social enterprise who provided rural customers with land-based legal services. To improve their go-to-market activities - we conducted focus group discussions with our clients and designed customer archetypes, rural marketing strategies, pricing strategy and localised value propositions - all contributing to their overall go-to-market strategy.

            </p>
          </div>
        </div>
        <div>
          
          <img src="/travelagency.png" height="200" alt="" className="design_image"/>

          <div className="w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold text-[#de0083] max-w-max mb-5">
            Assessing the viability of a travel-based social enterprise 

            </h2>

            <p className="pt-10 pb-20  text-lg text-justify">
            We have conducted a thorough market discovery project to understand the viability of a travel-based social enterprise catering solely to low-income clients across Bangladesh. Based on the market signals - we have prepared multiple models which informed the leadership of the way forward.

            Based on our work - a new travel product was made by partnering with an existing online travel agency. The product solely caters to low-income migrant labourers who want to avail affordable airline tickets.


            </p>
          </div>
        </div>
        <div>
          
          <img src="/bplanalytics.png" height="200" alt="" className="design_image"/>

          <div className="w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold text-[#de0083] max-w-max mb-5">
            Business development analytics for a social enterprise providing low-cost migration services
            </h2>

            <p className="pt-10 pb-20  text-lg text-justify">
            To support the enterprise, we have developed a dynamic decision-making toolkit based on data from over 10 databases. A composite equation was made to help the enterprise leadership assess the business development opportunities in multiple country scenarios.

            The toolkit helped the team in identifying the final countries to conduct their business development activities.



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

export default Collaboration;
