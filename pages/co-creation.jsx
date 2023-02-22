import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const CoCreation = () => {
  return (
    <div className="min-h-screen ">
      <Navbar2 />
      <div className="newimg">
        <h1 className="font-bold bg-[rgb(21,21,21)] text-white text-center text-3xl py-2">
        Co-creation
        </h1>
        <div>
          <img src="/cocreation.jpeg" className="object-top" alt="" />

          <div className=" w-11/12 md:w-9/12 mx-auto">

            <p className="pt-10  text-lg text-justify">
            We connect people through several platforms that foster knowledge sharing and partnerships. As an innovation hub, we are continuously learning about innovations and disseminating the best practices across BRAC and the development sector. We host forums, workshops and learning sessions to engage key stakeholders in conversations around innovation and cross-cutting development issues. Through these initiatives, we aim to create a collaborative ecosystem of innovative ideas and development insights.
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

export default CoCreation;
