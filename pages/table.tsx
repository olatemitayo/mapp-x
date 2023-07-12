import React, { useState } from "react";
import { Pagination, Input, Select, Button } from "@mantine/core";

const data = [
  {
    name: "John Doe",
    phoneNumber: "1234567890",
    status: "Active",
    age: 25,
    country: "USA",
    gender: "Male",
  },
  {
    name: "Bose Doe",
    phoneNumber: "1234567890",
    status: "Active",
    age: 25,
    country: "USA",
    gender: "Male",
  },
  {
    name: "Alex Felix",
    phoneNumber: "1234567890",
    status: "Active",
    age: 26,
    country: "USA",
    gender: "Female",
  },
  {
    name: "Akin Wale",
    phoneNumber: "1234567890",
    status: "Active",
    age: 26,
    country: "USA",
    gender: "Female",
  },
  {
    name: "John Doe",
    phoneNumber: "1234567890",
    status: "Active",
    age: 25,
    country: "USA",
    gender: "Male",
  },
  {
    name: "Bose Doe",
    phoneNumber: "1234567890",
    status: "Active",
    age: 25,
    country: "USA",
    gender: "Male",
  },
  {
    name: "Alex Felix",
    phoneNumber: "1234567890",
    status: "Active",
    age: 26,
    country: "USA",
    gender: "Female",
  },
  {
    name: "Akin Wale",
    phoneNumber: "1234567890",
    status: "Active",
    age: 26,
    country: "USA",
    gender: "Female",
  },
  {
    name: "John Doe",
    phoneNumber: "1234567890",
    status: "Active",
    age: 25,
    country: "USA",
    gender: "Male",
  },
  {
    name: "Bose Doe",
    phoneNumber: "1234567890",
    status: "Active",
    age: 25,
    country: "USA",
    gender: "Male",
  },
  {
    name: "Alex Felix",
    phoneNumber: "1234567890",
    status: "Active",
    age: 26,
    country: "USA",
    gender: "Female",
  },
  {
    name: "Akin Wale",
    phoneNumber: "1234567890",
    status: "Active",
    age: 26,
    country: "USA",
    gender: "Female",
  },
  // Add more data entries...
];

const Table = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  // Handle page change in pagination
  const handlePageChange = (newPage) => {
    setActivePage(newPage);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle gender filter change
  const handleGenderFilterChange = (value) => {
    setGenderFilter(value);
  };
  // Handle age filter change
  const handleAgeFilterChange = (value) => {
    setAgeFilter(value === "" ? "" : parseInt(value, 10));
  };

  // Filtering the data
  const filteredData = data
    .filter((item) => {
      const searchFields = [
        "name",
        "phoneNumber",
        "status",
        "age",
        "country",
        "gender",
      ];
      return searchFields.some((field) =>
        String(item[field]).toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .filter((item) => {
      if (genderFilter === "") return true;
      return item.gender === genderFilter;
    })
    .filter((item) => {
      if (ageFilter === "") return true;
      return item.age === parseInt(ageFilter, 10);
    });
  const itemsPerPage = 4;
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = activePage * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div>
      {/* Search Input */}
      <Input
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        style={{ marginBottom: "10px" }}
      />

      {/* Filter Selects */}
      <Select
        data={["", "Male", "Female"]}
        value={genderFilter}
        onChange={(value) => handleGenderFilterChange(value)}
        placeholder="Filter by Gender"
        style={{ marginBottom: "10px" }}
      />

      <Select
        data={["", "18", "25", "30", "40"]}
        value={ageFilter}
        onChange={(value) => handleAgeFilterChange(value)}
        placeholder="Filter by Age"
        style={{ marginBottom: "10px" }}
      />

      {/* Filter Button */}
      <Button onClick={() => console.log(filteredData)}>Apply Filters</Button>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Age</th>
            <th>Country</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.phoneNumber}>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.status}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        value={activePage}
        onChange={handlePageChange}
        total={Math.ceil(filteredData.length / itemsPerPage)}
      />
    </div>
  );
};

export default Table;
