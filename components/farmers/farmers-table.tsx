import { useState } from "react";
import { Text, Pagination, Table, Progress, Checkbox } from "@mantine/core";
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
    <>
      <div>All</div>
      <Table captionSide="bottom" className="h-full ">
        <thead>{ths}</thead>
        <tbody className="">{rows}</tbody>
      </Table>

      <Pagination
        total={totalPages}
        defaultValue={currentPage}
        onChange={handlePageChange}
        className="paginw"
      />
    </>
  );
}
