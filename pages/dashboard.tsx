import Feotable from "@/components/dashboard/feotable";
import Globaldb from "@/components/dashboard/globaldb";
import Graph from "@/components/dashboard/graph";
import Headers from "@/components/dashboard/headers";
import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <main className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="py-6 h-[100vh] flex-1 px-5  bg-[#F5F5F6] overflow-x-auto">
          <Pages text="Dashboard" page="Global Dashboard" />
          {/* headers */}
          <div className="flex overflow-x-auto no-scrollbar">
            <Headers />
          </div>
          <Graph />
          <Feotable />
        </div>
      </main>
    </>
  );
}
