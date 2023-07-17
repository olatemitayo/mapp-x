import Image from "next/image";
import { Table } from "@mantine/core";

export default function ActivityTable() {
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
  return (
    <Table captionSide="bottom" className="w-full">
      <thead>{ths}</thead>
      {/* <tbody className="">{ths}</tbody> */}
    </Table>
  );
}
