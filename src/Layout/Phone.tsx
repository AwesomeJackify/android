import React from "react";
// Acts like a phone layout, core of application.

const Phone = ({ children }) => {
  return (
    <div className="fixed h-screen  flex w-screen items-center justify-center bg-black">
      <div
        id="phone"
        className="min-h-screen flex-col items-center  overflow-auto no-scrollbar relative   w-full h-full md:w-1/3  flex  justify-start bg-white rounded-md shadow-md"
      >
        <div className="bg-red-600 flex justify-evenly items-center w-full h-8">
          <h1>iPod</h1>
          <h1>15:31</h1>
          <h1>25%</h1>
        </div>
        <main className="mt-16">{children}</main>
      </div>
    </div>
  );
};

export default Phone;
