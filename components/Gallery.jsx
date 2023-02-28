import React from "react";

const Gallery = () => {
  return (
  <div className="bg-[#de0083] min-h-max ">
    <hr className="bg-[#de0083] pt-2 " /> 
      <div className="w-11/12 md:w-9/12 mx-auto flex justify-center flex-col items-center pt-20 pb-28">
        <h1 className="text-5xl hover:text-[#de0083] title2 max-w-min hover:bg-white font-bold">Gallery</h1>
        {/*create a gallery with grid*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 ">
          <img src="/Gallery1.jpg" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery2.jpg" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery3.jpg" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery4.jpg" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery5.jpg" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery6.jpg" alt="" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery7.jpg" alt="" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery8.jpg" alt="" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery9.jpg" alt="" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery10.jpg" alt="" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery11.jpg" alt="" className="w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
        </div>
      
      </div>
      <hr className="bg-[#de0083] pt-2 border-none" /> 
  </div>
  );
};

export default Gallery;
