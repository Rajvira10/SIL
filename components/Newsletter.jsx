import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter -z-10 flex-col flex justify-center items-center">
      <h1 className="text-white text-3xl md:text-6xl  font-bold pb-1 md:pb-7 tracking-tighter">
        Subscribe
      </h1>
      <h2 className="text-white text-xl md:text-3xl pb-2 font-extralight">
        Stay informed - subscribe to our newsletter
      </h2>
      <input
        type="text"
        placeholder="Enter your email address..."
        className="w-[50%] rounded-lg mt-5 py-5 italic text-xl px-5 border-none outline-none"
      />
      <button className="bg-[rgb(77,79,83)] text-white mt-4 rounded px-6 py-3 hover:bg-[rgb(43,44,46)]">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Newsletter;
