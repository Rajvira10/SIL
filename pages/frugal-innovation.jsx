import Link from "next/link";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const FrugalInnovation = () => {
  return (
    <div className="min-h-screen ">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
        Frugal Innovation 
        </h1>
        <div>
          <img src="/fif2022.jpg" alt="" />

          <div className=" w-9/12 mx-auto">

            <p className="pt-10  text-lg text-justify">
            Jugaad, or ‘frugal innovation’ approach was always an inherent feature and a unique offering of Global South. This creative approach can be borrowed for wide-scale adoption and large-scale change for dynamic social impact. With this in mind, we aim to explore deeper into Global South’s fascinating potential,  to amplify what is already happening across the region, learning, sharing and scaling up low-cost models. a concept made popular in the West by <Link href="https://www.jbs.cam.ac.uk/faculty-research/faculty-a-z/jaideep-prabhu/" className="underline text-[#de0083]">Jaideep Prabhu’s</Link> must read book. Watch this <Link href="https://www.youtube.com/watch?v=BNnLXY7x5Hg&feature=youtu.be&ab_channel=BRAC" className="underline text-[#de0083]">video</Link> to learn how innovation at BRAC looks like. </p>
            <div className="py-10">
            <span className=" text-[#de0083] font-bold">Learn more:</span><Link href="https://www.youtube.com/watch?v=BNnLXY7x5Hg&feature=youtu.be&ab_channel=BRAC" className="underline text-[#de0083]"> What Innovation at BRAC looks like? </Link>
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

export default FrugalInnovation;
