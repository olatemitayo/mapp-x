import React from "react";
import { Data } from "../database/adminfeodata";
import { TextInput } from "@mantine/core";
import Image from "next/image";

export default function Nofarmersdata() {
  return (
    <div className="flex flex-col h-full gap-5 p-6 mt-4 rounded-[20px] bg-white">
      <div className="flex items-center justify-between gap-1">
        <div className="flex gap-2">
          <h2 className="text-2xl font-semibold">All Farmers</h2>
          <span className="bg-[#FCE9E8] text-[#BF2018] px-3 py-1 rounded-[32px]">
            {Data.length}
          </span>
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
      </div>
      {/* EMPTY FAMRER  */}
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-4">
          <Image
            width={70}
            height={70}
            src={"/emptyfarmer.svg"}
            alt="emptyfarmer"
          />
          <h3 className="text-[18px] font-semibold">The list is empty</h3>
          <div className="text-center text-[14px] font-normal">
            <p>There is currently no farmers data on this list.</p>
            <p>Please check back later.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
