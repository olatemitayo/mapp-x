import Feotable from "@/components/dashboard/feotable";
import Globaldb from "@/components/dashboard/globaldb";
import Graph from "@/components/dashboard/graph";
import Headers from "@/components/dashboard/headers";
import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@mantine/core";

export default function Dashboard() {
  return (
    <>
      <main className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="py-6 h-[100vh] flex-1 px-5  bg-[#F5F5F6] overflow-x-auto">
          <Pages text="Dashboard" page="Global Dashboard">
            <div className="flex gap-3 border-[#DADADD] bg-white p-2 rounded-[8px] min-w-[80px]">
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
                        <Image
                          src="/usa.svg"
                          alt="flag"
                          width={20}
                          height={20}
                        />
                        <h4>US</h4>
                      </div>
                    </Link>
                  </div>
                </Popover.Dropdown>
              </Popover>
            </div>
          </Pages>
          {/* headers */}
          <div className="flex overflow-x-auto no-scrollbar">
            <Headers />
          </div>
          <Graph />
          <Feotable />
        </div>
      </main>
    </>
  );
}
