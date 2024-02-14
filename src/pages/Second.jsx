import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BGimage } from "../assets";

const Second = () => {
  const [position, setPosition] = useState({});
  const [hoveredOnce, setHoveredOnce] = useState(false);

  const handleMouseMove = () => {
    const buttonWidth = 100; // Width of the button
    const buttonHeight = 40; // Height of the button
    const newLeft = Math.random() * (window.innerWidth - buttonWidth);
    const newTop = Math.random() * (window.innerHeight - buttonHeight);
    const newPosition = {
      left: `${Math.max(newLeft, 0)}px`, // Ensure it's at least 0
      top: `${Math.max(newTop, 0)}px`, // Ensure it's at least 0
    };
    setPosition(newPosition);
  };

  const handleNoButtonHover = () => {
    handleMouseMove();
    if (!hoveredOnce) {
      setHoveredOnce(true);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
      <img
        src={BGimage}
        alt="A big heart for you"
        className="absolute inset-0 z-0 bg-cover h-full w-full"
      />
      <div className="z-10 mb-28">
        <p className="text-white font-bold text-4xl mb-16 font-montserrat">
          Will you go on a date
          <br /> with me??
        </p>
        <div className=" text-center">
          <button
            className="border-red-600 border-2 rounded-xl w-24 h-10 text-white font-medium hover:border-white hover:shadow-sm hover:shadow-white"
            onClick={() =>
              alert("Great! I'll make sure we have a wonderful time together.")
            }
          >
            Yes
          </button>
          <button
            className={`border-red-600 border-2 rounded-xl w-24 h-10 text-white font-medium ${
              hoveredOnce ? "text-red-600" : ""
            } hover:border-white hover:shadow-sm hover:shadow-white`}
            style={{
              position: hoveredOnce ? "absolute" : "relative",
              ...position,
            }}
            onMouseMove={handleNoButtonHover}
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
};

export default Second;
