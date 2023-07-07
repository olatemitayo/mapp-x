import { useState } from "react";
import Image from "next/image";
import {
  Text,
  Pagination,
  Table,
  Progress,
  Checkbox,
  TextInput,
} from "@mantine/core";
import { Data } from "./famersdata";

const itemsPerPage = 10; // Number of items to display per page

export default function Farmertable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = Data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  if (endIndex > totalItems) {
    endIndex = totalItems;
  }
  const displayedItems = Data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const ths = (
    <tr>
      <th>Full name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Farmers</th>
      <th>Mapped Farmlands</th>
      <th>Progress</th>
      <th>Location</th>
    </tr>
  );

  const rows = displayedItems.map((item) => (
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
      <div className="flex items-center justify-between gap-1">
        <div className="flex gap-2">
          <h2 className="text-2xl font-semibold">All Farmers</h2>
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

      <Table captionSide="bottom" className="h-full">
        <thead>{ths}</thead>
        <tbody className="">{rows}</tbody>
      </Table>

      <Pagination
        total={totalPages}
        defaultValue={currentPage}
        onChange={handlePageChange}
        className="paginw"
        classNames={{}}
      />
    </div>
  );
}
