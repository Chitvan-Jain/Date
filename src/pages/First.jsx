import React from "react";
import { BGimage } from "../assets";
import { useState } from "react";

const First = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      // Redirect to the second page
      window.location.href = "/secondpage";
    }
  };

  const whenClick = () => {
    window.location.href = "/secondpage";
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
      <img
        src={BGimage}
        alt="A big heart for you"
        className="absolute inset-0 z-0 bg-cover h-full w-full"
      />
      <div className="z-10 w-1/4 mb-28 flex flex-col items-center">
        <p className=" text-white font-bold text-4xl mb-16 font-montserrat ">
          Are you free on 14<sup>th</sup> February??
        </p>
        <div className=" w-full flex flex-row justify-evenly">
          <button
            className=" border-red-600 border-2 rounded-xl w-24 h-10 text-white font-medium hover:border-white hover:shadow-sm hover:shadow-white"
            onClick={whenClick}
          >
            yup
          </button>
          <button
            onClick={handleClick}
            className="border-red-600 border-2 rounded-xl 
            w-24 h-10 text-white font-medium 
            hover:border-white hover:shadow-sm hover:shadow-white"
          >
            {clicked ? "Yes" : "Nooo"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default First;
