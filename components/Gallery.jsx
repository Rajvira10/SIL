import React,{ useState, useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5900);
    });
  }, []);

  const [scroll, setScroll] = useState(false);

  return (
  <div className="bg-[#de0083] min-h-max ">
    <hr className="bg-[#de0083] pt-2 " /> 
      <div className="w-11/12 md:w-9/12 mx-auto flex justify-center flex-col items-center pt-20 pb-28">
        <h1 className={
            scroll
              ? "hover:text-[#de0083] title2 max-w-max hover:bg-white text-5xl font-bold "
              : "hover:text-[#de0083]  max-w-max hover:bg-white text-5xl font-bold text-white underline"
          }>Gallery</h1>
        {/*create a gallery with grid*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 ">
          <img src="/Gallery1.jpg" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery2.jpg" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery3.jpg" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery4.jpg" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery5.jpg" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8" alt="" />
          <img src="/Gallery6.jpg" alt="" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery7.jpg" alt="" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery8.jpg" alt="" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery9.jpg" alt="" className="rounded w-full h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery10.jpg" alt="" className="w-full rounded h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
          <img src="/Gallery11.jpg" alt="" className="w-full rounded h-full shadow hover:scale-105 duration-100 cursor-pointer border border-white border-8 border border-white border-8"/>
        </div>
      
      </div>
      <hr className="bg-[#de0083] pt-2 border-none" /> 
  </div>
  );
};

export default Gallery;
