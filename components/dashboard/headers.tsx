import { Popover } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { AuthContext, ContextType, UserDetails } from "@/pages/_app";
import { useState } from "react";

interface PagesProps {
  role: string;
  // children?: React.ReactNode;
}

const HeaderItems = [
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
const FEOItems = [
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

export function Adminheader() {
  return (
    <>
      {HeaderItems.map((item) =>
        item.isReversed ? (
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex flex-col  max-w-[150px]">
              <h4 className="text-sm">{item.header}</h4>
              <h2 className="text-2xl font-[600] text-[#252735]">
                {item.figure}{" "}
                <span className="text-[10px] font-normal text-[#8F9198]">
                  farms
                </span>
              </h2>
              <p>{item.change}</p>
            </div>
            <figure className="flex">
              <Image
                width={50}
                height={50}
                src={item.Image}
                alt={item.header}
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
        ) : (
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[20%] rounded-2xl gap-3 justify-start ps-4 bg-white">
            <figure>
              <Image
                width={55}
                height={55}
                src={item.Image}
                alt={item.header}
              />
            </figure>
            <div className="flex flex-col gap-[2px]">
              <h4 className="text-sm">{item.header}</h4>
              <h2 className="text-2xl font-[600] text-[#252735]">
                {item.figure}
              </h2>
              <p className="text-[#C1C2C6] text-[14px]">
                <span className="text-[#30AD74]">{item.change}</span>{" "}
                {item.when}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
}

export function FEOHeader() {
  return (
    <>
      {FEOItems.map((item) =>
        item.isReversed ? (
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white">
            <div className="flex flex-col  max-w-[150px]">
              <h4 className="text-sm">{item.header}</h4>
              <h2 className="text-2xl font-[600] text-[#252735]">
                {item.figure}{" "}
                <span className="text-[10px] font-normal text-[#8F9198]">
                  farms
                </span>
              </h2>
              <p>{item.change}</p>
            </div>
            <figure className="flex">
              <Image
                width={50}
                height={50}
                src={item.Image}
                alt={item.header}
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
        ) : (
          <div className="flex  min-w-[280px] min-h-[100px] items-center w-[20%] rounded-2xl gap-3 justify-start ps-4 bg-white">
            <figure>
              <Image
                width={55}
                height={55}
                src={item.Image}
                alt={item.header}
              />
            </figure>
            <div className="flex flex-col gap-[2px]">
              <h4 className="text-sm">{item.header}</h4>
              <h2 className="text-2xl font-[600] text-[#252735]">
                {item.figure}
              </h2>
              <p className="text-[#C1C2C6] text-[14px]">
                <span className="text-[#30AD74]">{item.change}</span>{" "}
                {item.when}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default function Headers() {
  const [payload, setPayload] = useState<UserDetails>({
    role: "",
  });
  return (
    <div className="flex items-center gap-6 mt-6 overflow-x-scroll no-scrollbar ">
      {payload.role === "admin" ? <Adminheader /> : <FEOHeader />}
      {/* <Adminheader /> */}
      {
        // if(payload.role === 'ADmin')
      }
    </div>
  );
}
