import React from "react";
import { Data } from "../farmers/famersdata";
import FarmerModal from "../Admin/feomodal";
import Image from "next/image";
import clsx from "clsx";

interface LatestFeoProps {
  className?: string;
}

export default function Latestfeo({ className }: LatestFeoProps) {
  const lastestAddedFEO = Data.slice(-3);
  return (
    <section className={clsx("flex flex-col gap-6 bg-blue ", className)}>
      <div className="flex items-center justify-between gap-3"></div>

      {lastestAddedFEO.map((data) => (
        <div
          className={clsx(
            "flex  gap-3 items-center justify-between rounded-md w-[100%] p-2 mx-auto bg-white feoshadow",
            className
          )}
        >
          <div className="flex gap-3">
            <Image width={46} height={46} src={"/musa.png"} alt="img" />
            <div>
              <h5 className="font-semibold text-16">{data.name}</h5>
              <p className="text-12 font-[500] text-[#C1C2C6]">
                {data.location}
              </p>
            </div>
          </div>
          <div>
            <Image width={24} alt="edit" height={24} src={"/edit.svg"} />
          </div>
        </div>
      ))}
    </section>
  );
}
