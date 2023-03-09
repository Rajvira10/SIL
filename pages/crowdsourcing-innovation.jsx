import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const Crowdsourcing = () => {
  return (
    <div className="min-h-screen ">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
          Crowdsourcing
        </h1>
        <div>
          <img src="/fif.jpg" height="200" alt="" />

          <div className=" w-9/12 mx-auto">
            <h2 className="text-5xl font-bold  max-w-max text-[#de0083] mb-5">
              Frugal Innovation Forum
            </h2>

            <p className="pt-10 pb-20 text-lg text-justify">
              The Frugal Innovation Forum is the biggest international
              conference of BRAC where we explore what has worked and what
              hasn’t, what to improve and what needs to be done, and where to go
              from here (and who to partner with). This helps the broader
              development sector audience to address critical discussions and
              work toward closing the remaining gaps in a sustainable,
              cost-effective way. We also explore issues related to access,
              design, and uptake of meaningful use cases, as well as emerging
              disruptive innovations in this field. Since 2013, BRAC has been
              hosting the Frugal Innovation Forum every year, bringing together
              development practitioners, researchers, entrepreneurs, funding
              agencies and key stakeholders of the Global South. Followed by the
              virtual{" "}
              <Link
                href="https://innovation.brac.net/fif2022/"
                className="underline text-[#de0083]"
              >
                Runway to Frugal Innovation Forum
              </Link>{" "}
              from 17 may-19 May this year, Frugal Innovation Forum will be held
              in person later in the year.
            </p>
            {/* <h2>Gallery</h2> */}
          </div>
        </div>

        <div>
          <img src="/bracx 2.jpg" height="200" alt="" />

          <div className=" w-9/12 mx-auto">
            <h2 className="text-5xl font-bold max-w-max text-[#de0083] mb-5">
              bracX
            </h2>

            <p className="pt-10 pb-20  text-lg text-justify">
              We launched the first of its kind intrapreneurship platform in
              BRAC in 2018 to provide a scope for its employees to venture into
              the field of entrepreneurship through product, process, and system
              innovation.
              <br />
              <br />
              <span className="italic">“Who better to come up with solutions than those who work
              closely with the problem?”</span> <br /> - Asif Saleh, Executive Director, BRAC
              <br />
              <br />
              bracX engaged its head office employees in a cohort-based
              competition to foster impact through employee innovation. 30
              intrapreneurs went through an intense bootcamp and multiple rounds
              of selections. In the final round, five ideas were selected for
              prototyping and received seed funding of BDT 200,000 and
              mentorship from BRAC senior leadership. The competition ended on
              17 January 2019, with 2 teams emerging as winners. The teams are
              now being groomed to take their ideas forward and develop proofs
              of concept.
            </p>
            {/* <h2>Gallery</h2> */}
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

export default Crowdsourcing;
