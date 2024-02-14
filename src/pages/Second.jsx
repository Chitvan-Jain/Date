import React from "react";
import { BGimage } from "../assets";
import { useState } from "react";

const Second = () => {
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({});

  const handleClick = () => {
    setClicked(true);
    const buttonWidth = 100; // Width of the button
    const buttonHeight = 40; // Height of the button
    const maxLeft = document.documentElement.clientWidth - buttonWidth;
    const maxTop = document.documentElement.clientHeight - buttonHeight;
    const newLeft = Math.max(0, Math.min(Math.random() * maxLeft, maxLeft));
    const newTop = Math.max(0, Math.min(Math.random() * maxTop, maxTop));
    const newPosition = {
      left: `${newLeft}px`,
      top: `${newTop}px`,
    };
    setPosition(newPosition);
  };
  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
      <img
        src={BGimage}
        alt="A big heart for you"
        className="absolute inset-0 z-0 bg-cover h-full w-full"
      />
      <div className="z-10 w-1/4 mb-28 flex flex-col items-center">
        <p className="text-white font-bold text-4xl mb-16 font-montserrat">
          Will you go on a date with me??
        </p>
        <div className="w-full flex flex-row justify-between items-center relative">
          <button
            className="border-red-600 border-2 rounded-xl w-24 h-10 text-white font-medium hover:border-white hover:shadow-sm hover:shadow-white"
            onClick={() =>
              alert("Great! I'll make sure we have a wonderful time together.")
            }
          >
            Yes
          </button>
          <button
            onClick={handleClick}
            style={{
              color: clicked ? "black" : "white",
              position: clicked ? "absolute" : "relative", // Adjust position
              ...position,
            }}
            className={`border-red-600 border-2 rounded-xl w-24 h-10 font-medium hover:border-white hover:shadow-sm hover:shadow-white`}
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
};

export default Second;
