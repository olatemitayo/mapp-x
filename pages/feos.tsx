import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/sidebar";
import Nofarmersdata from "@/components/farmers/nofarmersdata";
import Feohead from "@/components/Admin/feohead";
import FEOFarmertable from "@/components/Admin/feotable";
import React, { useState, useEffect } from "react";
import { Data } from "@/components/farmers/famersdata";
import axios from "axios";
import withAuth from "@/components/protected-route";

function Feos() {
  const [list, setList] = useState([]);

  const feolist = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    axios({
      url: "",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function ({ data }) {
        setList(data.result); //
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    feolist();
  }, []);

  return (
    <main className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="py-6 h-[100vh] flex-1 px-5 \ bg-[#F5F5F6] overflow-x-auto">
        <Pages text="FEOs" page="FEO's List" />
        <Feohead />
        {Data.length === 0 ? (
          <Nofarmersdata text="FEOs" para="feo" />
        ) : (
          <FEOFarmertable />
        )}
      </div>
    </main>
  );
}

export default withAuth(Feos);
