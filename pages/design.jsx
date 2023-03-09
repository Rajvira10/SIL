import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const Design = () => {
  return (
    <div className="max-h-max ">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
        Design
         
        </h1>
        <div>
          <img src="/innovationfund.jpeg" height="200" alt="" />

          <div className="w-11/12 md:w-9/12 mx-auto">
            <p className="pt-10 pb-20 text-lg text-justify">
            A human-centred approach to design is our guiding principle. We design keeping users at the heart of our work, and we design in collaboration with our stakeholders. We divide our work process into three phases: simplify, ideate and learn. You can remember it by the mnemonic S-I-L


            </p>
            {/* <h2>Gallery</h2> */}
          </div>
        </div>

        <div>
          <img src="/howwedoit.png" className="design_image" height="200" alt="" />

          <div className=" w-11/12 md:w-9/12 mx-auto text-lg">
            <div>
            <p><span className="text-[#de0083] font-bold">Simplify:</span>  We seek to understand our users and what drives them to frame the problem we will be working to solve. </p> 
          <p><span className="text-[#de0083] font-bold">Ideate:</span>  We make sense of what we have found and identify opportunities for testing.</p>
          <p><span className="text-[#de0083] font-bold">Learn:</span>  We bring our ideas to life, and test to evaluate what can be viable. </p>
          <p>Here’s our secret for you!</p> 
          <p><span className="text-[#de0083] font-bold">Learn more: </span><Link href="/handbook.pdf" className="underline text-[#de0083]">BRACoron: The BRAC way of designing with users</Link></p>
            </div>
            <div className="mt-10">
              <img src="/bracoron.png" className="design_image" height="200" alt="" />
            </div>
            <div>
           <p> Behaviour insights have long informed our work for our clients. We have launched behavioural trials in the past to know about behaviour patterns, perceptions and barriers. This has helped us to hone our programme design capacity and influencing policies at the same time.</p>
          <p>As we pride ourselves on being relevant to the people we serve, we have invested in user experience and service design. We go into the field, test with our users and quickly iterate to smoothen their journey. Our service design has helped us identify key interaction points of the services provided to our clients and evaluate their feasibility and convenience rapidly.
          </p>

            </div>

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

export default Design;
