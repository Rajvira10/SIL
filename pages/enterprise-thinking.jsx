import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const Enterprise = () => {
  return (
    <div className="min-h-screen ">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
        Enterprise Thinking
        </h1>
        <div>
          <img src="/enterprise.JPG" alt="" />

          <div className="w-11/12 md:w-9/12 mx-auto">

            <p className="pt-10  text-lg text-justify">
            Social enterprises offer an intersection of business and traditional non-profit. By design, BRAC social enterprises are self-sustaining cause-driven business entities that create social impact by offering solutions to social challenges. 

            We believe that our approach to innovation has the power to bring improvements to enterprise products, services and customer experience. That in turn - helps these enterprises to become more effective and efficient in solving social challenges - leading to more revenues and surplus. Our theory-of-change suggests that they can be reinvested again to sustain and generate greater social impact. 
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

export default Enterprise;
