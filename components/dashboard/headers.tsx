import { UserDetails } from "@/pages/_app";
import { Popover } from "@mantine/core";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderItem = {
  Image: string;
  header: string;
  figure: string;
  change?: string;
  when?: string;
  isReversed: boolean;
  para?: string;
};
type FEOItems = {
  Image: string;
  header: string;
  figure: string;
  change?: string;
  when?: string;
  isReversed: boolean;
  para?: string;
};
const HeaderItems: HeaderItem[] = [
  {
    Image: "/hfeos.svg",
    header: "FEOs",
    figure: "5,000",
    isReversed: false,
  },
  {
    Image: "/hmapped.svg",
    header: "Mapped Farmlands",
    figure: "574,000",
    change: "+23% ",
    when: "since last month",
    isReversed: false,
  },
  {
    Image: "/bluemapped.svg",
    header: "Unmapped Farmland",
    figure: "2,000",
    isReversed: false,
  },
  {
    Image: "/flag.svg",
    header: "Highest Mapped Region",
    figure: "11,000",
    para: "farms",
    isReversed: true,
  },
  {
    Image: "/regfarmers.svg",
    header: "Registered Farmers",
    figure: "10,154",
    isReversed: false,
  },
  {
    Image: "/totallga.svg",
    header: "Total LGAs",
    figure: "2,935",
    isReversed: false,
  },
];
const FEOItems: FEOItems[] = [
  {
    Image: "/hmapped.svg",
    header: "Mapped Farmlands",
    figure: "574,000",
    change: "+23% ",
    when: "since last month",
    isReversed: false,
  },
  {
    Image: "/bluemapped.svg",
    header: "Unmapped Farmland",
    figure: "2,000",
    isReversed: false,
  },
  {
    Image: "/flag.svg",
    header: "Highest Mapped Region",
    figure: "11,000",
    para: "farms",
    isReversed: true,
  },
  {
    Image: "/regfarmers.svg",
    header: "Registered Farmers",
    figure: "10,154",
    isReversed: false,
  },
];

export default function Headers() {
  const [payload, setPayload] = useState<UserDetails>({
    role: "",
  });
  const [header, setHeader] = useState<any>([]);
  //get dashboard data
  //to get data for the country
  const headerFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(
        "https://mapx.onrender.com/api/admin/dashboard/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setHeader(data);
    } catch (error) {}
  };

  useEffect(() => {
    headerFetch();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);

  return (
    <div className="flex items-center gap-6 mt-6 overflow-x-scroll no-scrollbar ">
      {payload.role === "Admin" ? (
        <div className="flex gap-5">
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex gap-5 ">
              <figure>
                <Image
                  width={55}
                  height={55}
                  src={HeaderItems[0].Image}
                  alt={HeaderItems[0].header}
                />
              </figure>
              <div className="flex flex-col gap-[2px]">
                <h4 className="text-sm">{HeaderItems[0].header}</h4>
                <h2 className="text-2xl font-[600] text-[#252735]">
                  {header.field_officer_count}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex items-center gap-5">
              <figure>
                <Image
                  width={55}
                  height={55}
                  src={HeaderItems[1].Image}
                  alt={HeaderItems[1].header}
                />
              </figure>
              <div className="flex flex-col gap-[2px]">
                <h4 className="text-sm whitespace-nowrap">
                  {HeaderItems[1].header}
                </h4>
                <h2 className="text-2xl font-[600] text-[#252735]">
                  {header.mapped_farmlands_count}
                </h2>
                <p className="text-[#C1C2C6] text-[14px]">
                  <span className="text-[#30AD74]">
                    {HeaderItems[1].change}
                  </span>{" "}
                  {HeaderItems[1].when}
                </p>
              </div>
            </div>
          </div>
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex gap-5 ">
              <figure>
                <Image
                  width={55}
                  height={55}
                  src={HeaderItems[2].Image}
                  alt={HeaderItems[2].header}
                />
              </figure>
              <div className="flex flex-col gap-[2px]">
                <h4 className="text-sm">{HeaderItems[2].header}</h4>
                <h2 className="text-2xl font-[600] text-[#252735]">
                  {header.unmapped_farmlands_count}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex flex-col  max-w-[150px]">
              <h4 className="text-sm">{HeaderItems[3].header}</h4>
              <h2 className="text-2xl font-[600] text-[#252735]">
                {HeaderItems[3].figure}{" "}
                <span className="text-[10px] font-normal text-[#8F9198]">
                  farms
                </span>
              </h2>
              <p>{HeaderItems[2].change}</p>
            </div>
            <figure className="flex">
              <Image
                width={50}
                height={50}
                src={HeaderItems[3].Image}
                alt={HeaderItems[3].header}
              />
              <Popover width={250} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Image
                    width={24}
                    height={24}
                    src="/arrowDown.svg"
                    alt="arrow"
                    className="cursor-pointer"
                  />
                </Popover.Target>
                <Popover.Dropdown className="rounded-md">
                  <div className="flex flex-col gap-3">
                    <Link href="#">
                      <div className="flex items-center justify-between gap-1">
                        <h2 className="text-2xl font-[600] text-[#252735]">
                          10,000
                          <span className="text-[10px] ms-1 font-normal text-[#8F9198]">
                            farms
                          </span>
                        </h2>
                        <Image
                          src="/Kenya.svg"
                          alt="flag"
                          width={50}
                          height={50}
                        />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center justify-between gap-1">
                        <h2 className="text-2xl font-[600] text-[#252735]">
                          8,503
                          <span className="text-[10px] ms-1 font-normal text-[#8F9198]">
                            farms
                          </span>
                        </h2>
                        <Image
                          src="/Uganda.svg"
                          alt="flag"
                          width={50}
                          height={50}
                        />
                      </div>
                    </Link>

                    <Link href="#">
                      <div className="flex items-center justify-between gap-1">
                        <h2 className="text-2xl font-[600] text-[#252735]">
                          230
                          <span className="text-[10px] ms-1 font-normal text-[#8F9198]">
                            farms
                          </span>
                        </h2>
                        <Image
                          src="/usa.svg"
                          alt="flag"
                          width={50}
                          height={50}
                        />
                      </div>
                    </Link>
                  </div>
                </Popover.Dropdown>
              </Popover>
            </figure>
          </div>
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex gap-5 ">
              <figure>
                <Image
                  width={55}
                  height={55}
                  src={HeaderItems[4].Image}
                  alt={HeaderItems[4].header}
                />
              </figure>
              <div className="flex flex-col gap-[2px]">
                <h4 className="text-sm">{HeaderItems[4].header}</h4>
                <h2 className="text-2xl font-[600] text-[#252735]">
                  {header.total_farmers}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex gap-5 ">
              <figure>
                <Image
                  width={55}
                  height={55}
                  src={HeaderItems[5].Image}
                  alt={HeaderItems[5].header}
                />
              </figure>
              <div className="flex flex-col gap-[2px]">
                <h4 className="text-sm">{HeaderItems[5].header}</h4>
                <h2 className="text-2xl font-[600] text-[#252735]">
                  {header.total_cities}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex gap-5">
            <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
              <div className="flex items-center gap-5">
                <figure>
                  <Image
                    width={55}
                    height={55}
                    src={FEOItems[0].Image}
                    alt={FEOItems[0].header}
                  />
                </figure>
                <div className="flex flex-col gap-[2px]">
                  <h4 className="text-sm whitespace-nowrap">
                    {FEOItems[0].header}
                  </h4>
                  <h2 className="text-2xl font-[600] text-[#252735]">
                    {header.mapped_farmlands_count}
                  </h2>
                  <p className="text-[#C1C2C6] text-[14px]">
                    <span className="text-[#30AD74]">{FEOItems[0].change}</span>{" "}
                    FEOItems{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
              <div className="flex gap-5 ">
                <figure>
                  <Image
                    width={55}
                    height={55}
                    src={FEOItems[1].Image}
                    alt={FEOItems[1].header}
                  />
                </figure>
                <div className="flex flex-col gap-[2px]">
                  <h4 className="text-sm">{FEOItems[1].header}</h4>
                  <h2 className="text-2xl font-[600] text-[#252735]">
                    {header.unmapped_farmlands_count}
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
              <div className="flex flex-col  max-w-[150px]">
                <h4 className="text-sm">{FEOItems[2].header}</h4>
                <h2 className="text-2xl font-[600] text-[#252735]">
                  {FEOItems[2].figure}{" "}
                  <span className="text-[10px] font-normal text-[#8F9198]">
                    farms
                  </span>
                </h2>
                <p>{FEOItems[2].change}</p>
              </div>
              <figure className="flex">
                <Image
                  width={50}
                  height={50}
                  src={FEOItems[2].Image}
                  alt={FEOItems[2].header}
                />
                <Popover width={250} position="bottom" withArrow shadow="md">
                  <Popover.Target>
                    <Image
                      width={24}
                      height={24}
                      src="/arrowDown.svg"
                      alt="arrow"
                      className="cursor-pointer"
                    />
                  </Popover.Target>
                  <Popover.Dropdown className="rounded-md">
                    <div className="flex flex-col gap-3">
                      <Link href="#">
                        <div className="flex items-center justify-between gap-1">
                          <h2 className="text-2xl font-[600] text-[#252735]">
                            10,000
                            <span className="text-[10px] ms-1 font-normal text-[#8F9198]">
                              farms
                            </span>
                          </h2>
                          <Image
                            src="/Kenya.svg"
                            alt="flag"
                            width={50}
                            height={50}
                          />
                        </div>
                      </Link>
                      <Link href="#">
                        <div className="flex items-center justify-between gap-1">
                          <h2 className="text-2xl font-[600] text-[#252735]">
                            8,503
                            <span className="text-[10px] ms-1 font-normal text-[#8F9198]">
                              farms
                            </span>
                          </h2>
                          <Image
                            src="/Uganda.svg"
                            alt="flag"
                            width={50}
                            height={50}
                          />
                        </div>
                      </Link>

                      <Link href="#">
                        <div className="flex items-center justify-between gap-1">
                          <h2 className="text-2xl font-[600] text-[#252735]">
                            230
                            <span className="text-[10px] ms-1 font-normal text-[#8F9198]">
                              farms
                            </span>
                          </h2>
                          <Image
                            src="/usa.svg"
                            alt="flag"
                            width={50}
                            height={50}
                          />
                        </div>
                      </Link>
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </figure>
            </div>
            <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
              <div className="flex gap-5 ">
                <figure>
                  <Image
                    width={55}
                    height={55}
                    src={FEOItems[3].Image}
                    alt={FEOItems[3].header}
                  />
                </figure>
                <div className="flex flex-col gap-[2px]">
                  <h4 className="text-sm">{FEOItems[3].header}</h4>
                  <h2 className="text-2xl font-[600] text-[#252735]">
                    {header.total_farmers}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
