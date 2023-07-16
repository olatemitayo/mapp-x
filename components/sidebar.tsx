import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AdminItems = [
  {
    img: "/dashboard.png",
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    img: "/farmers.png",
    text: "Farmers",
    link: "/farmers",
  },
  {
    img: "/map.png",
    text: "Mapping",
    link: "#",
  },
  {
    img: "/feo.png",
    text: "FEOs",
    link: "/feos",
  },
  {
    img: "/activity.png",
    text: "Activity Log",
    link: "/activity-log",
  },
];

const FEOItems = [
  {
    img: "/dashboard.png",
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    img: "/farmers.png",
    text: "Farmers",
    link: "/farmers",
  },
  {
    img: "/map.png",
    text: "Mapping",
    link: "#",
  },
];

const groups = [
  {
    img: "/profile.png",
    text: "Profile",
    link: "/profile",
  },
];

const logout = {
  img: "/logout.png",
  text: "Log Out",
  link: "/logout",
};

const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/";
};

import { AuthContext, ContextType, UserDetails } from "@/pages/_app";

interface PagesProps {
  role: string;
  children?: React.ReactNode;
}

export default function Sidebar() {
  const [payload, setPayload] = useState<UserDetails>({
    role: "",
  });
  return (
    <>
      <div className="w-[200px] h-[100vh]  py-6   bg-[#65110D] flex flex-col items-center ">
        <figure className="flex items-center gap-2 mb-10">
          <Image
            src="/dashboardLogo.svg"
            width={33}
            height={40}
            alt="mapX Logo"
          />
          <h2 className="logoClamp font-[700] text-[#fff] text-2xl">MapX</h2>
        </figure>
        <div className="flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-10">
            {payload.role === "Admin"
              ? AdminItems.map((item) => (
                  <Link href={item.link} className="flex items-center gap-3">
                    <Image
                      src={item.img}
                      width={24}
                      height={24}
                      alt={item.text}
                    />
                    <li key={item.text} className="text-base text-white">
                      {item.text}
                    </li>
                  </Link>
                ))
              : FEOItems.map((item) => (
                  <Link href={item.link} className="flex items-center gap-3">
                    <Image
                      src={item.img}
                      width={24}
                      height={24}
                      alt={item.text}
                    />
                    <li key={item.text} className="text-base text-white">
                      {item.text}
                    </li>
                  </Link>
                ))}
          </ul>

          <ul className="flex flex-col gap-10">
            {groups.map((group) => (
              <Link href={group.link} className="flex items-center gap-3">
                <Image
                  src={group.img}
                  width={24}
                  height={24}
                  alt={group.text}
                />
                <li key={group.text} className="text-base text-white">
                  {group.text}
                </li>
              </Link>
            ))}
            <Link href={""} className="flex items-center gap-3">
              <Image
                src={logout.img}
                width={24}
                height={24}
                alt={logout.text}
              />
              <li
                key={logout.text}
                onClick={handleLogout}
                className="text-base text-white"
              >
                {logout.text}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
