import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthText from "@/components/auth/auth-text";
import AuthImg from "@/components/auth/auth-img";
import Button from "@/components/auth/button";
import { Group, PinInput } from "@mantine/core";
import { useRouter } from "next/router";

export default function Verify() {
  const [otp, setOtp] = useState("");

  const router = useRouter();
  const verifypin = async () => {
    try {
      const res = await fetch(
        "https://mapx.onrender.com/accounts/api/verify_code/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: router.query.email,
            verification_code: otp,
          }),
        }
      );
      if (res.ok)
        router.push(`/create-new-password?email=${router.query.email}`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    verifypin();
  };

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
              <form
                action=""
                className="mt-[40px] flex flex-col gap-6"
                onSubmit={handlesubmit}
              >
                <Group position="center">
                  <PinInput
                    onChange={setOtp}
                    value={String(otp)}
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
