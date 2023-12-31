import withAuth from "@/components/protected-route";
import Graph from "@/components/dashboard/graph";

import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/sidebar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@mantine/core";
import USHeaders from "@/components/dashboard/headers/usaheader";
import USFeotable from "@/components/dashboard/tables/usatable";

function Dashboard() {
  return (
    <>
      <main className=" grid grid-cols-[auto_1fr] ">
        <Sidebar />
        <div className="py-6 h-[100vh] flex flex-col px-5  bg-[#F5F5F6] overflow-auto">
          <Pages text="Dashboard" page="USA Dashboard">
            <div className="flex gap-3 border-[#DADADD] bg-white p-2 rounded-[8px] min-w-[80px]">
              <Image src="/usa.svg" alt="flag" width={24} height={24} />
              <Popover width={120} position="bottom" withArrow shadow="md">
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
                    <Link href="/dashboard">
                      <div className="flex gap-1">
                        <Image
                          width={24}
                          height={24}
                          src="/worldwide.svg"
                          alt="worldwide"
                        />
                        <h4>GLOBAL</h4>
                      </div>
                    </Link>
                    <Link href="/kenyadb">
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
                    <Link href="/ugandadb">
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
                  </div>
                </Popover.Dropdown>
              </Popover>
            </div>
          </Pages>
          <div className="flex-1 overflow-auto no-scrollbar">
            <div className="flex ">
              <USHeaders />
            </div>
            <Graph />
            <USFeotable />
          </div>
          {/* headers */}
        </div>
      </main>
    </>
  );
}

export default withAuth(Dashboard);
