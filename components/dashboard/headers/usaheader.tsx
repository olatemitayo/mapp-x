import { UserDetails } from "@/pages/_app";
import { Popover } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderItems = [
  {
    Image: "/hfeos.svg",
    header: "FEOs",
    figure: "500",
    isReversed: false,
  },
  {
    Image: "/hmapped.svg",
    header: "Mapped Farmlands",
    figure: "5400",
    change: "+17% ",
    when: "since last month",
    isReversed: false,
  },
  {
    Image: "/bluemapped.svg",
    header: "Unmapped Farmland",
    figure: "200",
    isReversed: false,
  },
  {
    Image: "/usa.svg",
    header: " Mapped Region",
    figure: "230",
    para: "farms",
    isReversed: false,
  },
  {
    Image: "/regfarmers.svg",
    header: "Registered Farmers",
    figure: "104",
    isReversed: false,
  },
  {
    Image: "/totallga.svg",
    header: "Total LGAs",
    figure: "235",
    isReversed: false,
  },
];
const FEOItems = [
  {
    Image: "/hmapped.svg",
    header: "Mapped Farmlands",
    figure: "5400",
    change: "+17% ",
    when: "since last month",
    isReversed: false,
  },
  {
    Image: "/bluemapped.svg",
    header: "Unmapped Farmland",
    figure: "200",
    isReversed: false,
  },
  {
    Image: "/usa.svg",
    header: " Mapped Region",
    figure: "230",
    para: "farms",
    isReversed: false,
  },
  {
    Image: "/regfarmers.svg",
    header: "Registered Farmers",
    figure: "104",
    isReversed: false,
  },
];

export function Adminheader() {
  return (
    <>
      {HeaderItems.map((item) =>
        item.isReversed ? (
          <div
            key={item.figure}
            className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white"
          >
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
          <div
            key={item.figure}
            className="flex  min-w-[280px] min-h-[100px] items-center w-[20%] rounded-2xl gap-3 justify-start ps-4 bg-white"
          >
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
          <div
            key={item.figure}
            className="flex  min-w-[280px] min-h-[100px] items-center w-[16%]  rounded-2xl gap-3 justify-start ps-4 bg-white"
          >
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
          <div
            key={item.figure}
            className="flex  min-w-[280px] min-h-[100px] items-center w-[20%] rounded-2xl gap-3 justify-start ps-4 bg-white"
          >
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

export default function USHeaders() {
  const [payload, setPayload] = useState<UserDetails>({
    role: "",
  });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return (
    <div className="flex items-center gap-6 mt-6 overflow-x-scroll no-scrollbar ">
      {payload.role === "Admin" ? <Adminheader /> : <FEOHeader />}
    </div>
  );
}
