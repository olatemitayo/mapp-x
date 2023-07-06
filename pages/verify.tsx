import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthText from "@/components/common/auth-text";
import AuthImg from "@/components/common/auth-img";
import Pin from "@/components/common/pin";
import Button from "@/components/common/button";
import { Group, PinInput } from "@mantine/core";

export default function Verify() {
  return (
    <>
      <main className="flex">
        <div className="w-[53%] h-[100vh] flex flex-col justify-center items-center text-start relative">
          <Link
            href="/signin"
            className="flex  items-center absolute top-[20px] text-start w-[60%]"
          >
            <Image height={24} width={24} alt="goback" src="/arrowBack.svg" />
            <p className="text-base text-[#8F9198]  ">Back to sign in</p>
          </Link>
          <div className="w-[60%]">
            <div>
              <AuthText
                header="Enter Verification Code"
                para="We just sent a 4-digit code to your email address;"
              />
              <form action="" className="mt-[40px] flex flex-col gap-6">
                <Group position="center">
                  <PinInput
                    classNames={{
                      input: "w-full h-[84px]",
                    }}
                  />
                </Group>
                <div>
                  <Button text="Verify" className="!w-full" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[47%]">
          <AuthImg />
        </div>
      </main>
    </>
  );
}
