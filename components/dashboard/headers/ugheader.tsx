import { Popover } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const HeaderItems = [
  {
    Image: "/hfeos.svg",
    header: "FEOs",
    figure: "56",
    isReversed: false,
  },
  {
    Image: "/hmapped.svg",
    header: "Mapped Farmlands",
    figure: "890",
    change: "+4% ",
    when: "since last month",
    isReversed: false,
  },
  {
    Image: "/bluemapped.svg",
    header: "Unmapped Farmland",
    figure: "124",
    isReversed: false,
  },
  {
    Image: "/Uganda.svg",
    header: " Mapped Region",
    figure: "656",
    para: "farms",
    isReversed: false,
  },
  {
    Image: "/regfarmers.svg",
    header: "Registered Farmers",
    figure: "333",
    isReversed: false,
  },
  {
    Image: "/totallga.svg",
    header: "Total LGAs",
    figure: "356",
    isReversed: false,
  },
];

export default function UgHeaders() {
  return (
    <div className="flex items-center gap-6 mt-6 overflow-x-scroll no-scrollbar ">
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
    </div>
  );
}
