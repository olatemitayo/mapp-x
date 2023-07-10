import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/dashboard/sidebar";
import Nofarmersdata from "@/components/farmers/nofarmersdata";
import Feohead from "@/components/Admin/feohead";
import FEOFarmertable from "@/components/Admin/feotable";
import React from "react";
import { Data } from "@/components/farmers/famersdata";

export default function Feos() {
  return (
    <main className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="py-6 h-[100vh] flex-1 px-5 \ bg-[#F5F5F6] overflow-x-auto">
        <Pages text="FEOs" page="FEO's List" />
        <Feohead />
        {Data.length == 0 ? (
          <Nofarmersdata text="FEOs" para="feo" />
        ) : (
          <FEOFarmertable />
        )}
      </div>
    </main>
  );
}
