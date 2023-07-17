import Image from "next/image";
import { Table, Progress, TextInput } from "@mantine/core";
import { Data } from "../database/adminfeodata";

export default function FEOFarmertable() {
  const totalItems = Data.length;

  const ths = (
    <tr>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        <div className="flex gap-1">
          Full name{" "}
          <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        <div className="flex gap-1">
          Phone <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Email <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Farmers <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Mapped Farmlands{" "}
          <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Progress <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Location <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Country <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Options <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
    </tr>
  );

  const rows = Data.map((item) => (
    <tr
      key={item.name}
      className="cursor-pointer hover:bg-[#f0f0f0] hover:cursor-pointer"
    >
      <td className="!border-0">{item.name}</td>
      <td className="!border-0">{item.phone}</td>
      <td className="!border-0">{item.email}</td>
      <td className="!border-0">{item.farmers}</td>
      <td className="!border-0">{item.mapped}</td>
      <td className="!border-0">
        <div>
          <span>{item.progress}%</span>
          <Progress color="#BF2018" value={item.progress} />
        </div>
      </td>
      <td className="!border-0">{item.location}</td>
      <td className="!border-0">
        <div className="flex gap-2">
          <Image src={"/Flag.svg"} width={20} height={20} alt="flag" />
          <div>{item.country}</div>
        </div>
      </td>

      <td className="!border-0">
        <div className="flex gap-4">
          <Image
            width={20}
            height={20}
            alt=""
            src={"/delete.svg"}
            className="cursor-pointer"
          />
          <Image
            width={20}
            height={20}
            alt=""
            src={"/editt.svg"}
            className="cursor-pointer"
          />
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="flex flex-col h-full gap-5 p-6 mt-4 rounded-[20px] bg-white">
      <div className="flex items-center justify-between gap-1">
        <div className="flex gap-2">
          <h2 className="text-2xl font-semibold">All FEOs</h2>
          <span className="bg-[#FCE9E8] text-[#BF2018] px-3 py-1 rounded-[32px]">
            {totalItems}
          </span>
        </div>
        <div>
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
      </div>

      <div className="flex-1 mt-2 overflow-auto no-scrollbar ">
        <Table
          captionSide="bottom"
          className="h-[100vh] w-[107vw] overflow-auto"
        >
          <thead className="flex-1 overflow-auto overflow-x-auto">{ths}</thead>
          <tbody className="overflow-x-scroll">{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}
