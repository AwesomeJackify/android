import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import stripes from "../assets/stripes.png";

const Ball: React.FC<{
  animationCompleted: boolean;
}> = ({ animationCompleted }) => {
  return (
    <div className="flex flex-col justify-start h-full bg-black">
      {/* Sticky nav bar */}
      <div className="sticky text-white top-0 shadow-md z-10 h-24 flex items-center bg-blue-400 justify-start">
        {animationCompleted && (
          <div className="h-full flex items-center w-full justify-center text-2xl">
            <h1 className="w-5/6 ml-4">Ball</h1>
            <div className="h-full w-1/6 flex items-center justify-center text-5xl border-l-2 border-gray-800">
              <h1 className="">
                <FaArrowRight />
              </h1>
            </div>
          </div>
        )}
      </div>
      {/* Navbar ends */}

      <div className="flex flex-col h-full">
        <div className="rounded-full w-32 aspect-square bg-orange-500 overflow-clip translate-x-5">
          <img src={stripes} alt="stripes" className="w-[4000%] max-w-none" />
        </div>
      </div>
    </div>
  );
};

export default Ball;
