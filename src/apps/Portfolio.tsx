import saladinoImg from "../assets/saladino.png";
import { FaArrowRotateRight } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="flex  min-h-screen flex-col justify-start">
      {/* Sticky nav bar  */}
      <div className="sticky text-white  top-0 shadow-md z-10 h-24  flex items-center bg-blue-400 justify-start">
        <div
          className=" 
        
        
        
        
        
        h-full flex items-center w-full justify-center text-2xl"
        >
          <h1 className="w-5/6 ml-4 ">Instagram</h1>
          <div className="h-full w-1/6   flex items-center justify-center text-5xl border-l-2 border-gray-800 ">
            <h1 className="hover:cursor-pointer">
              <FaArrowRotateRight />
            </h1>
          </div>
        </div>
      </div>
      {/* Navbar ends  */}
    </div>
  );
};

export default Portfolio;
