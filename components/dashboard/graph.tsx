import React from "react";
import Globalchart from "./line-chart/globalchart";
import GlobalBarChart from "./bar-chart/global-bar-chart";
import Image from "next/image";

export default function Graph() {
  return (
    <>
      <div className="flex justify-between mt-5">
        {/* left graph  */}
        <div className="sm:w-[90%]  md:w-[49.5%]  border-[1px] bg-white rounded-[20px] px-10 pt-7">
          <div>
            {/* calendar  */}
            <div className="flex justify-between">
              <div className="bg-[#F5F5F6] flex gap-2 items-center p-2 rounded-lg">
                <Image
                  width={18}
                  height={18}
                  src={"/calendar.svg"}
                  alt="calender"
                />
                <p>This month</p>
              </div>
              <div className="bg-[#F5F5F6] flex gap-7 items-center p-2 rounded-lg">
                <div>12M</div>
                <div>6M</div>
                <div className="bg-[#4A4C58] text-[#fff] py-1 px-3 rounded-lg">
                  30D
                </div>
                <div>7D</div>
              </div>
            </div>
            {/* chart  */}
            <div className="flex ">
              <div className="me-[7rem]  mt-4" style={{ width: "max-content" }}>
                <h1 className="text-[#2C2F3C] text-[34px] font-bold">12.4k</h1>
                <p className="flex text-[#8F9198] text-[14px] whitespace-nowrap">
                  Total mapped{" "}
                  <span className="text-[#01B574] flex">
                    <img src="/gain.svg" alt="" />
                    <p>{Math.floor(Math.random() * (100 - 0 + 0)) + 0}%</p>
                  </span>
                </p>
              </div>
              <div className="flex-1 mt-[4.3rem]">
                <Globalchart />
              </div>
            </div>
          </div>
        </div>
        {/* right graph  */}
        <div className="sm:w-[90%]  md:w-[49.5%]  border-[1px] bg-white rounded-[20px] p-2">
          <GlobalBarChart />
        </div>
      </div>
    </>
  );
}
