import { useState } from "react";
import Image from "next/image";
import { Drawer, Table, TextInput } from "@mantine/core";
import { FarmersList } from "./famersdata";

export default function Farmertable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleRowClick = (index) => {
    setSelectedRow(index);
    setDrawerOpened(true);
  };

  const closeDrawer = () => {
    setSelectedRow(null);
    setDrawerOpened(false);
  };

  const totalItems = FarmersList.length;

  const ths = (
    <tr>
      <th>Full name</th>
      <th>Follo ID</th>
      <th>Phone</th>
      <th>Assigned FEO</th>
      <th>Address</th>
      <th>Country</th>
    </tr>
  );

  const rows = FarmersList.map((item, index) => (
    <tr
      key={item.name}
      onClick={() => handleRowClick(index)}
      className="hover:bg-[#fcfbfb] hover:cursor-pointer"
    >
      <td>{item.name}</td>
      <td>{item.id}</td>
      <td>{item.phone}</td>
      <td>{item.assigned}</td>
      <td>{item.address}</td>
      <td>{item.country}</td>
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
              <p>Column Visibility</p>
            </div>
            <div>
              <Image width={40} height={40} alt="columns" src="/filter.svg" />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto no-scrollbar">
          <Table captionSide="bottom" className="h-[100vh]">
            <thead className="flex-1 overflow-auto">{ths}</thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </div>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
        size="md"
        title={selectedRow !== null ? FarmersList[selectedRow].name : ""}
        classNames={{
          title: "ms-5 font-[700] text-[18px]",
          close: "focus:outline-0 w-[2rem]",
          header: "border-b",
        }}
      >
        <div className="">
          {selectedRow !== null && (
            <div className="p-5 ">
              <div>
                <h3 className="text-[16px] text-[#8F9198] font-semibold">
                  Farmer's Details
                </h3>
                {/* farmer details  */}
                <div className="flex gap-5 mt-6">
                  <div>
                    <img
                      src={"/drawerpic.png"}
                      alt="picture"
                      className="w-[50px] h-[50px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text=[#4A4C58] font-semibold text-[14px]">
                      {FarmersList[selectedRow].name}
                    </h1>
                    <div className="flex gap-2">
                      <Image
                        width={12}
                        height={12}
                        src={"/dprofile.svg"}
                        alt="profile"
                      />
                      <p className="text-[12px] text-[#8F9198] font-normal">
                        MX-20230412
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        width={12}
                        height={12}
                        src={"/dprofile.svg"}
                        alt="profile"
                      />
                      <p className="text-[12px] text-[#8F9198] font-normal">
                        MX-20230412
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-end gap-2">
                    <div className="flex gap-2">
                      <Image
                        width={12}
                        height={12}
                        src={"/dprofile.svg"}
                        alt="profile"
                      />
                      <p className="text-[12px] text-[#8F9198] font-normal">
                        MX-20230412
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        width={12}
                        height={12}
                        src={"/dprofile.svg"}
                        alt="profile"
                      />
                      <p className="text-[12px] text-[#8F9198] font-normal">
                        MX-20230412
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* point  */}
              <div className="mt-6">
                <h3 className="text-[16px] text-[#8F9198] font-semibold">
                  Farm Cordinate
                </h3>
                {/* farm cordinate  */}
                <div className="flex gap-5 mt-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#8F9198] text-[12px]">Point 1</p>
                    <div className="flex gap-20">
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/long.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Longitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            78.5222N
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/lat.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Latitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            58.5222N
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* farm cordinate  */}
                <div className="flex gap-5 mt-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#8F9198] text-[12px]">Point 2</p>
                    <div className="flex gap-20">
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/long.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Longitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            78.5222N
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/lat.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Latitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            58.5222N
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* farm cordinate  */}
                <div className="flex gap-5 mt-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#8F9198] text-[12px]">Point 3</p>
                    <div className="flex gap-20">
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/long.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Longitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            78.5222N
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/lat.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Latitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            58.5222N
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* farm cordinate  */}
                <div className="flex gap-5 mt-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#8F9198] text-[12px]">Point 4</p>
                    <div className="flex gap-20">
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/long.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Longitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            78.5222N
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Image
                          width={18}
                          height={18}
                          src={"/lat.svg"}
                          alt="long"
                          className="mt-1"
                        />
                        <div>
                          <p className="text-[14px] font-[500] text-[#4A4C58]">
                            Latitude
                          </p>
                          <p className="text-[12px] font-[400] text-[#4A4C58]">
                            58.5222N
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
}
