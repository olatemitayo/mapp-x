import Image from "next/image";
import { Progress, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ActivityTable() {
  const [tableData, setTableData] = useState([]);
  //get feo list
  const activityList = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch("https://mapx.onrender.com/api/activitylog/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      setTableData(data.results);
    } catch (error) {
      toast.error("Unable to fetch");
    }
  };

  useEffect(() => {
    activityList();
  }, []);
  const ths = (
    <tr>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        <div className="flex gap-1">
          User <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        <div className="flex gap-1">
          User Type{" "}
          <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Action <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Date and Time{" "}
          <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Platform <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Country <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
    </tr>
  );

  const rows = tableData.map((item) => (
    <tr
      key={item.name}
      className="cursor-pointer hover:bg-[#f0f0f0] hover:cursor-pointer"
    >
      <td className="!border-0">{item.actor_name}</td>
      <td className="!border-0">{item.user_type}</td>
      <td className="!border-0">{item.activity}</td>
      <td className="!border-0">{item.date}</td>
      <td className="!border-0">{item.platform}</td>
      <td className="!border-0">{item.country}</td>
    </tr>
  ));
  return (
    <Table captionSide="bottom" className="w-full">
      <thead>{ths}</thead>
      <tbody className="">{rows}</tbody>
    </Table>
  );
}
