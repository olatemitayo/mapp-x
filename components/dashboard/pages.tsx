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
    <div>
      <p className="text-[#8F9198] text-[14px] font-[500]">
        pages/<span className="text-[#1B1E2C]">{text}</span>{" "}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-12">
          <h2 className="text-[32px] font-[600] text-[#1B1E2C]">{page}</h2>
          {/* <div className="flex gap-3 border-[#DADADD] bg-white p-2 rounded-[8px] min-w-[80px]">
            <Image
              width={24}
              height={24}
              src="/worldwide.svg"
              alt="worldwide"
            />
            <Popover width={75} position="bottom" withArrow shadow="md">
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
                    <div className="flex gap-1">
                      <Image
                        src="/Kenya.svg"
                        alt="flag"
                        width={20}
                        height={20}
                      />
                      <h4>KE</h4>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="flex gap-1">
                      <Image
                        src="/Uganda.svg"
                        alt="flag"
                        width={20}
                        height={20}
                      />
                      <h4>UG</h4>
                    </div>
                  </Link>
                  <Link href="/nigeriadb">
                    <div className="flex gap-1">
                      <Image
                        src="/Flag.svg"
                        alt="flag"
                        width={20}
                        height={20}
                      />
                      <h4>NG</h4>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="flex gap-1">
                      <Image src="/usa.svg" alt="flag" width={20} height={20} />
                      <h4>US</h4>
                    </div>
                  </Link>
                </div>
              </Popover.Dropdown>
            </Popover>
          </div> */}
          {children}
        </div>
        <div className="flex w-[485px] justify-between p-3 rounded-[30px] bg-white">
          <TextInput
            className="border-2  w-[284px] rounded-[30px] px-4 "
            placeholder="search"
            withAsterisk
            classNames={{
              input: "border-none",
            }}
          />

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
