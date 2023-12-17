import React from "react";
// Acts like a phone layout, core of application.

const Phone = ({ children }) => {
  return (
    <div className="fixed h-screen  flex w-screen items-center justify-center bg-black">
      <div
        id="phone"
        className="min-h-screen  overflow-auto no-scrollbar relative  my-16 w-full h-full md:w-1/3  flex items-center justify-center bg-white rounded-md shadow-md"
      >
        <main className="mb-32">{children}</main>
      </div>
    </div>
  );
};

export default Phone;
