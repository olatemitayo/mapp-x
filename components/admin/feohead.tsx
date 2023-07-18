import React, { useState } from "react";
import Image from "next/image";
import { Button, Group, TextInput } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import FeoModal from "./feomodal";

export default function Feohead() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="font-semibold">Overview</div>
        <div>
          <Group
            position="center"
            classNames={{
              Group: "flex justify-between border-0 ",
            }}
          >
            <Button
              onClick={open}
              className="px-2 py-1 rounded-[10px] bg-[#BF2018] hover:bg-[#BF2018]"
            >
              <span style={{ display: "inline-block", marginInlineEnd: "4px" }}>
                <Image width={24} height={24} src="/add_circle.svg" alt="add" />
              </span>
              Add new
            </Button>
          </Group>
        </div>
      </div>
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
      <FeoModal opened={opened} close={close} />
    </>
  );
}
