import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { SlPeople } from "react-icons/sl";

const Nav = () => {
  return (
    <div className="grid z-10 grid-cols-[1fr_2fr_1fr] border-2 border-t-white border-b-slate-500 mt-auto border-r-slate-600 rounded-md">
      <div className="bg-slate-800 flex justify-center items-center">
        <FaPhoneAlt className="text-2xl text-white" />
      </div>
      <div className="bg-slate-900 flex justify-center p-2 items-center">
        <MdArrowBackIosNew className="text-4xl rotate-90 text-white" />
      </div>
      <div className=" bg-slate-800 flex justify-center p-2 items-center">
        <SlPeople className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default Nav;
