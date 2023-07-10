import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

export default function ActivityLog() {
  return (
    <main className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="py-6 h-[100vh] flex-1 px-5   bg-[#F5F5F6] overflow-x-auto">
        <Pages text="Activity Log" page="Activities" />
      </div>
    </main>
  );
}
