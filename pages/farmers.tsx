import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/sidebar";
import Farmertable from "@/components/farmers/farmers-table";
import { FarmersList } from "@/components/farmers/famersdata";
import Nofarmersdata from "@/components/farmers/nofarmersdata";
import withAuth from "@/components/protected-route";
import { AuthContext, ContextType, UserDetails } from "@/pages/_app";
import FarmerModal from "@/components/farmers/farmermodal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface PagesProps {
  role: string;
  children?: React.ReactNode;
}

const Farmers: React.FC<PagesProps> = () => {
  const [payload, setPayload] = useState<UserDetails>({
    first_name: "",
    last_name: "",
    profile_picture: "",
    role: "",
    designation: "",
    email: "",
    location: "",
    phone_number: "",
  });
  const [farmerData, setFarmerData] = useState([]);

  //get farmers list
  const farmersList = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch("https://mapx.onrender.com/api/farmers/list/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      setFarmerData(data.results);
    } catch (error) {
      toast.error("Unable to get Farmers list");
    }
  };
  useEffect(() => {
    farmersList();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return (
    <main className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="py-6 h-[100vh] flex flex-col px-5  bg-[#F5F5F6] overflow-x-auto">
        <Pages text="Farmers" page="Farmer's List" />
        <div className="flex items-center justify-between">
          <div className="font-semibold">Overview</div>
          <div>{payload.role === "Admin" ? <div></div> : <FarmerModal />}</div>
        </div>
        <div className="flex-1 overflow-auto no-scrollbar">
          {farmerData.length == 0 ? (
            <Nofarmersdata text="Farmers" para="farmer" />
          ) : (
            <Farmertable />
          )}
        </div>
      </div>
    </main>
  );
};

export default withAuth(Farmers);
