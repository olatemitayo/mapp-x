import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/dashboard/sidebar";
import Farmertable from "@/components/farmers/farmers-table";
import React from "react";
import { Data } from "@/components/farmers/famersdata";
import Nofarmersdata from "@/components/farmers/nofarmersdata";

export default function Farmers() {
  return (
    <main className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="py-6 h-[100vh] no-scrollbar flex-1 px-5  bg-[#F5F5F6] overflow-x-auto">
        <Pages text="Farmers" page="Farmer's List" />
        {Data.length == 0 ? <Nofarmersdata /> : <Farmertable />}
      </div>
    </main>
  );
}
