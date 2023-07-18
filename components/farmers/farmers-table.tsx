import { useState } from "react";
import Image from "next/image";
import { Divider, Drawer, Group, Table, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FarmersList } from "./famersdata";
import Link from "next/link";



export default function Farmertable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const handleRowClick = (index) => {
    setSelectedRow(index);
    setDrawerOpened(true);
  };

  const closeDrawer = () => {
    setSelectedRow(null);
    setDrawerOpened(false);
  };

  const ths = (
    <tr>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Full name{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Follo ID{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Phone{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Email{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Assigned FEO{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Address{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Country{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Mapped Status{" "}
          <Image
            width={24}
            height={24}
            src={"/sort.svg"}
            alt="sort"
            className="cursor-pointer"
          />
        </div>
      </th>
    </tr>
  );

  const rows = FarmersList.map((item, index) => (
    <tr
      key={item.name}
      onClick={() => handleRowClick(index)}
      className="hover:bg-[#f0f0f0] hover:cursor-pointer"
    >
      <td className="!border-0">{item.name}</td>
      <td className="!border-0">{item.id}</td>
      <td className="!border-0">{item.phone}</td>
      <td className="!border-0">{item.email}</td>
      <td className="!border-0">{item.assigned}</td>
      <td className="!border-0">{item.address}</td>
      <td className="!border-0">{item.country}</td>
      <td className="flex !border-0">
        {item.mapped ? (
          <div className="bg-[#FFF1F3] px-2">
            <div className="flex items-center gap-1">
              <Image width={16} height={16} src={"/redpoint.svg"} alt="point" />
              <div className=" text-[#C01048]   flex justify-center py-1">
                {" "}
                Unmapped
              </div>
            </div>
          </div>
        ) : (
          <div className=" bg-[#ECFDF3] px-2 ">
            <div className="flex items-center gap-1">
              <Image
                width={16}
                height={16}
                src={"/greenpoint.svg"}
                alt="point"
              />
              <div className="flex   text-[#027A48] py-1">Mapped</div>
            </div>
          </div>
        )}
      </td>
    </tr>
  ));

  return (
    <>
      <div className="flex flex-col h-full gap-5 p-6 mt-4 rounded-[20px] bg-white">
        <div className="flex flex-col overflow-auto">
          <div className="flex items-center justify-between gap-1">
            <div className="flex gap-2">
              <h2 className="text-2xl font-semibold">All Farmers</h2>
              <span className="bg-[#FCE9E8] text-[#BF2018] px-3 py-1 rounded-[32px]">
                {FarmersList.length}
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
                <Image
                  width={24}
                  height={24}
                  alt="columns"
                  src="/columns.svg"
                />
                <p>Column Visibility</p>
              </div>
              <div>
                <Image width={40} height={40} alt="columns" src="/filter.svg" />
              </div>
            </div>
          </div>
          <div className="flex-1 mt-2 overflow-auto no-scrollbar ">
            <Table
              captionSide="bottom"
              className="h-[100vh] w-[100vw] overflow-auto"
            >
              <thead className="flex-1 overflow-auto overflow-x-auto">
                {ths}
              </thead>
              <tbody className="overflow-x-scroll">{rows}</tbody>
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
                    Farmer&aposs Details
                  </h3>
                  {/* farmer details  */}
                  <div className="flex gap-5 mt-4">
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
                          {FarmersList[selectedRow].phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end gap-2">
                      <div className="flex gap-2">
                        <Image
                          width={12}
                          height={12}
                          src={"/dprofile.svg"}
                          alt="profile"
                        />
                        <p className="text-[12px] text-[#8F9198] font-normal">
                          {`${FarmersList[selectedRow].address} - ${FarmersList[selectedRow].country}`}
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
                          {FarmersList[selectedRow].email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <h3 className="text-[16px] text-[#8F9198] font-semibold">
                    Assigned FEO
                  </h3>
                  <p className="text-[#bf2018] text-[14px]">
                    {FarmersList[selectedRow].assigned}
                  </p>
                </div>
                {/* MAPPED FARMLAND  */}
                {FarmersList[selectedRow].mapped ? (
                  <div>No Mapped Farm</div>
                ) : (
                  <div className="flex flex-col gap-4 mt-6">
                    <h3 className="text-[16px] text-[#8F9198] font-semibold">
                      Mapped Farmland
                    </h3>
                    {/* Abuja Farm  */}
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-[14px] font-semibold text-[#4a4c58]">
                          My Abuja Farm
                        </h4>
                        {/* mantine  */}
                        <Drawer
                          opened={opened}
                          onClose={close}
                          size="md"
                          position="right"
                          classNames={{
                            root: "!bg-none ",
                            overlay: "!bg-none !opacity-0 ",
                          }}
                        ></Drawer>

                        <Group>
                          <p
                            onClick={open}
                            className="text-[#bf2018] text-[12px] font-medium cursor-pointer"
                          >
                            {" "}
                            View
                          </p>
                        </Group>
                      </div>
                      <div className="flex flex-col gap-2 mt-4">
                        <p className="text-[#8F9198] text-[12px]">
                          Size:
                          <span className="font-normal ms-10 text-[#4A4C58] text-[14px]">
                            2 hectares
                          </span>
                        </p>
                        <p className="text-[#8F9198] text-[12px]">
                          Area:
                          <span className="font-normal ms-10 text-[#4A4C58] text-[14px]">
                            234m<sup>2</sup>
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Ibadan Farm  */}
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-[14px] font-semibold text-[#4a4c58]">
                          My Ibadan Farm
                        </h4>
                        {/* mantine  */}
                        <Drawer
                          opened={opened}
                          onClose={close}
                          position="right"
                          title={`${FarmersList[selectedRow].name}'s Farm`}
                          classNames={{
                            title: "ms-5 font-[700] text-[18px]",
                            close: "focus:outline-0 w-[2rem]",
                            header: "border-b",
                            root: "!bg-none ",
                            overlay: "!bg-none !opacity-0 ",
                          }}
                        >
                          {/* point  */}
                          <div className="p-5">
                            <div className="flex justify-between">
                              <p
                                onClick={close}
                                className="text-[12px] text-[#5E606A] flex items-center gap-2 cursor-pointer"
                              >
                                <span>
                                  <Image
                                    width={16}
                                    height={16}
                                    src={"/mback.svg"}
                                    alt="back"
                                  />
                                </span>
                                back
                              </p>
                              <Link
                                className="text-[#bf2018] text-[12px] font-medium cursor-pointer"
                                href="#"
                              >
                                View Map
                              </Link>
                            </div>
                            <div className="mt-4">
                              <h3 className="text-[16px] text-[#8F9198] font-semibold">
                                Farm Cordinate
                              </h3>

                              <div className="flex gap-5 mt-4">
                                <div className="flex flex-col gap-2">
                                  <p className="text-[#8F9198] text-[12px]">
                                    Point 1
                                  </p>
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

                              <div className="flex gap-5 mt-4">
                                <div className="flex flex-col gap-2">
                                  <p className="text-[#8F9198] text-[12px]">
                                    Point 2
                                  </p>
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

                              <div className="flex gap-5 mt-4">
                                <div className="flex flex-col gap-2">
                                  <p className="text-[#8F9198] text-[12px]">
                                    Point 3
                                  </p>
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

                              <div className="flex gap-5 mt-4">
                                <div className="flex flex-col gap-2">
                                  <p className="text-[#8F9198] text-[12px]">
                                    Point 4
                                  </p>
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
                            <div className="mt-4">
                              <h3 className="text-[16px] text-[#8F9198] font-semibold">
                                Farm Size
                              </h3>
                              <div className="flex flex-col gap-2">
                                <p className="text-[#8F9198] text-[12px]">
                                  Size:
                                  <span className="font-normal ms-10 text-[#4A4C58] text-[14px]">
                                    2 hectares
                                  </span>
                                </p>
                                <p className="text-[#8F9198] text-[12px]">
                                  Area:
                                  <span className="font-normal ms-10 text-[#4A4C58] text-[14px]">
                                    234m<sup>2</sup>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="mt-4">
                              <h3 className="text-[16px] text-[#8F9198] font-semibold">
                                Farm Size
                              </h3>
                              <div className="mt-4">
                                <address className="not-italic text-[#4A4C58] text-[14px] font-medium ">
                                  34T, Sodeinde street, Off Ademola estate,
                                  Abuja
                                </address>
                              </div>
                            </div>
                            {/* popover pictures  */}
                            <div className="mt-4">
                              <h3 className="text-[16px] text-[#8F9198] font-semibold">
                                Farmland Snapshots
                              </h3>
                              <div className="flex gap-2 mt-4 overflow-auto no-scrollbar">
                                <Image
                                  width={100}
                                  height={100}
                                  alt="farm-one"
                                  src={"/farm1.png"}
                                />
                                <Image
                                  width={100}
                                  height={100}
                                  alt="farm-one"
                                  src={"/farm2.png"}
                                />
                                <Image
                                  width={100}
                                  height={100}
                                  alt="farm-one"
                                  src={"/farm3.png"}
                                />
                                <Image
                                  width={100}
                                  height={100}
                                  alt="farm-one"
                                  src={"/farm4.png"}
                                />
                              </div>
                            </div>
                          </div>
                        </Drawer>

                        <Group>
                          <p
                            onClick={open}
                            className="text-[#bf2018] text-[12px] font-medium cursor-pointer"
                          >
                            {" "}
                            View
                          </p>
                        </Group>
                      </div>
                      <div className="flex flex-col gap-2 mt-4">
                        <p className="text-[#8F9198] text-[12px]">
                          Size:
                          <span className="font-normal ms-10 text-[#4A4C58] text-[14px]">
                            2 hectares
                          </span>
                        </p>
                        <p className="text-[#8F9198] text-[12px]">
                          Area:
                          <span className="font-normal ms-10 text-[#4A4C58] text-[14px]">
                            234m<sup>2</sup>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Drawer>
      </div>
    </>
  );
}
