import Globaldb from "@/components/dashboard/globaldb";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <main className="grid grid-cols-[auto_1fr]">
        <Sidebar />

        <Globaldb />
      </main>
    </>
  );
}
