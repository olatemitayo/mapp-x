import { useState } from "react";
import Image from "next/image";
import { Table, Progress, TextInput } from "@mantine/core";
import { Farmers } from "./famersdata";

export default function Farmertable() {
  const totalItems = Farmers.length;

  const ths = (
    <tr>
      <th>Full name</th>
      <th>Follo ID</th>
      <th>Phone</th>
      <th>Assigned FEO</th>
      <th>Address</th>
      <th>Country</th>
      <th>Location</th>
    </tr>
  );

  const rows = Farmers.map((item) => (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.farmers}</td>
      <td>{item.mapped}</td>
      <td>
        <Progress color="#BF2018" value={item.progress} />
      </td>
      <td>{item.location}</td>
    </tr>
  ));

  return (
    <div className="flex flex-col h-full gap-5 p-6 mt-4 rounded-[20px] bg-white">
      <div className="flex flex-col overflow-auto">
        <div className="flex items-center justify-between gap-1">
          <div className="flex gap-2">
            <h2 className="text-2xl font-semibold">All Farmers</h2>
            <span className="bg-[#FCE9E8] text-[#BF2018] px-3 py-1 rounded-[32px]">
              {totalItems}
            </span>
          </div>

          <div className="flex gap-3">
            <TextInput
              className="border-2  w-[284px] rounded-[8px] px-4 "
              placeholder="search"
              withAsterisk
              classNames={{
                input: "border-none",
              }}
            />
            <div className="flex gap-2 items-center px-4 border rounded-[8px]">
              <Image width={24} height={24} alt="columns" src="/columns.svg" />
              <p>Colum Visibility</p>
            </div>
            <div>
              <Image width={40} height={40} alt="columns" src="/filter.svg" />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto no-scrollbar ">
          <Table captionSide="bottom" className="h-[100vh]">
            <thead className="flex-1 overflow-auto">{ths}</thead>
            <tbody className="">{rows}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
