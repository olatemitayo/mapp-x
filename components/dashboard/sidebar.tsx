import React from "react";
import Image from "next/image";
import Link from "next/link";

const Items = [
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

const groups = [
  {
    img: "/profile.png",
    text: "Profile",
    link: "/profile",
  },
  {
    img: "/logout.png",
    text: "Log Out",
    link: "/logout",
  },
];

export default function Sidebar() {
  return (
    <>
      <div className="w-[200px]  py-6  h-[100vh]  bg-[#65110D] flex flex-col items-center ">
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
            {Items.map((item) => (
              <Link href={item.link} className="flex items-center gap-3">
                <Image src={item.img} width={24} height={24} alt={item.text} />
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
          </ul>
        </div>
      </div>
    </>
  );
}
