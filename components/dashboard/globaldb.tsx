import React from "react";
import Pages from "./pages";
import Headers from "./headers";

export default function Globaldb() {
  return (
    <>
      <div className="py-6 h-[100vh] flex-1 px-5  bg-[#F5F5F6] overflow-x-auto">
        <Pages text="Dashboard" />
        {/* headers */}
        <div className="flex overflow-x-auto no-scrollbar">
          <Headers image="/hfeos.svg" header="FEOs" figure="25,000" />
        </div>
      </div>
    </>
  );
}
