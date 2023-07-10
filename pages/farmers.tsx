import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/dashboard/sidebar";
import Farmertable from "@/components/farmers/farmers-table";
import { FarmersList } from "@/components/farmers/famersdata";
import Nofarmersdata from "@/components/farmers/nofarmersdata";

export default function Farmers() {
  return (
    <main className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="py-6 h-[100vh] flex flex-col px-5  bg-[#F5F5F6] overflow-x-auto">
        <Pages text="Farmers" page="Farmer's List" />
        <div className="flex-1 overflow-auto no-scrollbar">
          {FarmersList.length == 0 ? (
            <Nofarmersdata text="Farmers" para="farmer" />
          ) : (
            <Farmertable />
          )}
        </div>
      </div>
    </main>
  );
}
