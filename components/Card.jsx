import Image from "next/image";
import React from "react";

const Card = ({ title, para }) => {
  return (
    <div className="bg-white flex-col card cursor-pointer hover:scale-105 ease-in-out duration-300">
      <Image src="/hero.jpg" height={197} width={270} alt="" />
      <div className="h-[225px] w-[270px] text-center pt-8 px-6">
        <h1 className="text-lg font-bold pb-3">{title}</h1>
        <p className="pt-4">{para}</p>
      </div>
    </div>
  );
};

export default Card;
