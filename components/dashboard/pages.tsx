import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, TextInput } from "@mantine/core";

interface PagesProps {
  text: string;
  page: string;
  children?: React.ReactNode;
}

export default function Pages({ text, page, children }: PagesProps) {
  return (
    <div className="">
      <p className="text-[#8F9198] text-[14px] font-[500]">
        pages/<span className="text-[#1B1E2C]">{text}</span>{" "}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-12">
          <h2 className="text-[32px] font-[600] text-[#1B1E2C]">{page}</h2>
          {children}
        </div>
        <div className="flex w-[485px] justify-between p-3 rounded-[30px] bg-white">
          <div className="flex relative">
            <Image
              width={11}
              height={11}
              src={"/search.svg"}
              alt="search"
              className="absolute top-3.5 left-4 "
            />
            <TextInput
              className="border-2  w-[284px] rounded-[30px] ps-8 "
              placeholder="search"
              withAsterisk
              classNames={{
                input: "border-none",
              }}
            />
          </div>

          <Image
            src="/notifications.svg"
            width={24}
            height={24}
            alt="notifications"
          />
          <Image src="/widget.svg" width={24} height={24} alt="widget" />
          <Image src="/dp.svg" width={41} height={41} alt="display picture" />
        </div>
      </div>
      <div />
    </div>
  );
}
