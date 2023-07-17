import Feotable from "@/components/dashboard/feotable";
import Globaldb from "@/components/dashboard/globaldb";
import withAuth from "@/components/protected-route";
import Graph from "@/components/dashboard/graph";
import Headers from "@/components/dashboard/headers";
import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@mantine/core";
import { UserDetails } from "./_app";

function Dashboard({ id }) {
  return (
    <>
      <main className=" grid grid-cols-[auto_1fr] ">
        <Sidebar />
        <div className="py-6 h-[100vh] flex flex-col px-5  bg-[#F5F5F6] overflow-auto">
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
                    <Link href="/usadb">
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
          <div className="flex-1 overflow-auto no-scrollbar">
            <div className="flex ">
              <Headers />
            </div>
            <Graph />
            <Feotable id={id} />
          </div>
        </div>
      </main>
    </>
  );
}

export default withAuth(Dashboard);
