import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/button";

export default function Index() {
  return (
    <main>
      <div className="flex px-[100px] py-[50px] justify-between">
        <div className="flex justify-center items-center gap-2">
          <Image height={50} width={41} alt="mapX" src="/xIcon.svg" />
          <h2 className="logoClamp font-[700] text-[#515055] text-h2">MapX</h2>
        </div>
        <Link href="/signin">
          <Button text="SSO Login" />
        </Link>
      </div>
      <div className="md:w-[650px] xl:w-[800px] mx-auto flex flex-col justify-center items-center gap-5  ">
        <h1 className="text-h1 font-[600] text=[#101828] whitespace-nowrap">
          Mapping just got better with{" "}
          <span className="bg-[#BF2018] text-white px-2">MapX</span>
        </h1>
        <p className="text-center text-p text-[#8F9198]">
          Step into a world of precision agriculture and seamless farm
          management. Our platform empowers you to visualize, plan, and optimize
          every aspect of your farm operations.
        </p>
      </div>
      <div className="mt-[30px] flex justify-center">
        <Link href="/signin">
          <Button text="SSO Login" />
        </Link>
      </div>
      <figure className="mt-[43.9px] flex justify-center">
        <Image
          height={558}
          width={1280}
          alt="mobile-desktop"
          src="/mobileDesktop.svg"
        />
      </figure>
    </main>
  );
}
