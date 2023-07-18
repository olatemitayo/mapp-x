import ActivityTable from "@/components/activity-log/activity-table";
import Pages from "@/components/dashboard/pages";
import withAuth from "@/components/protected-route";
import Sidebar from "@/components/sidebar";
import React from "react";

function ActivityLog() {
  return (
    <main className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="py-6 h-[100vh] flex-1 px-5   bg-[#F5F5F6] overflow-x-auto">
        <Pages text="Activity Log" page="Activities" />
        <ActivityTable />
      </div>
      <div></div>
    </main>
  );
}

export default withAuth(ActivityLog);
