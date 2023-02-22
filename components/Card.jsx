import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ title, para, image, back, link }) => {
  return (
   
    <div className="wrapper">
      <Link href={link}>
      <div className="single-card">
        <div className="front bg-white flex-col card cursor-pointer ">
          <img src={image} className="card__image" alt="" />
          <div className="h-[225px] w-[270px] text-center pt-8 px-6">
            <h1 className="text-lg font-bold pb-3">{title}</h1>
            <p className="pt-4">{para}</p>
          </div>
        </div>
        <div className="back text-justify flex justify-center items-center">
          {back}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
