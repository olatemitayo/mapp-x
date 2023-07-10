import React from "react";
import Image from "next/image";
import { TextInput } from "@mantine/core";

export default function Feohead() {
  return (
    <>
      <div className="flex justify-between mt-4">
        <div className="flex p-6 bg-white gap-44 rounded-xl ">
          <div className="flex flex-col gap-2">
            <p className="text-[#8F9198] text-[14px]">TOTAL FEO</p>
            <h2 className="text-[#252735] font-semibold text-2xl">3502</h2>
            <p className="text-[12px] text-[#8F9198]">
              <span className="text-[12px] font-medium text-[#30AD74]">
                +23%{" "}
              </span>
              since last month
            </p>
          </div>
          <div>
            <Image
              width={22}
              height={16}
              src={"/totalfeo.svg"}
              alt="totalfeo"
            />
          </div>
        </div>
        <div className="flex p-6 bg-white gap-44 rounded-xl ">
          <div className="flex flex-col gap-2">
            <p className="text-[#8F9198] text-[14px]">REGISTERED THIS MONTH</p>
            <h2 className="text-[#252735] font-semibold text-2xl">3502</h2>
            <p className="text-[12px] text-[#8F9198]">
              <span className="text-[12px] font-medium text-[#30AD74]">
                +23%{" "}
              </span>
              since last month
            </p>
          </div>
          <div>
            <Image
              width={22}
              height={16}
              src={"/monthfeo.svg"}
              alt="totalfeo"
            />
          </div>
        </div>
        <div className="flex p-6 bg-white 52-white gap-44 rounded-xl ">
          <div className="flex flex-col gap-2">
            <p className="text-[#8F9198] text-[14px]">REGISTERED BY YOU</p>
            <h2 className="text-[#252735] font-semibold text-2xl">3502</h2>
            <p className="text-[12px] text-[#8F9198]">
              <span className="text-[12px] font-medium text-[#30AD74]">
                +23%{" "}
              </span>
              since last month
            </p>
          </div>
          <div>
            <Image width={22} height={16} src={"/youfeo.svg"} alt="youfeo" />
          </div>
        </div>
      </div>

      {/* section  */}
      {/* <div className="flex items-center justify-between gap-1 p-6 mt-4 bg-white rounded-xl">
        <div className="flex gap-2">
          <h2 className="text-2xl font-semibold">All FEO</h2>
        </div>
        <div>
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
              <p>Colum Visibility</p>
            </div>
            <div>
              <Image width={40} height={40} alt="columns" src="/filter.svg" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
