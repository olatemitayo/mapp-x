import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthText from "@/components/auth/auth-text";
import Button from "@/components/auth/button";
import AuthImg from "@/components/auth/auth-img";

export default function CreateNewPasword() {
  return (
    <>
      <main className="flex">
        <div className="w-[53%] h-[100vh] flex flex-col justify-center items-center text-start relative">
          <Link
            href="/signin"
            className="flex  items-center absolute top-[20px] text-start sm:w-[85%] lg:w-[60%]"
          >
            <Image height={24} width={24} alt="goback" src="/arrowBack.svg" />
            <p className="text-base text-[#8F9198]  ">Back to sign in</p>
          </Link>
          <div className="sm:w-[85%] lg:w-[60%]">
            <div>
              <AuthText
                header="Create Password"
                para="Create your new password to login"
              />
              <form action="" className="mt-[40px] flex flex-col gap-6">
                <div className="grid gap-3">
                  <label
                    htmlFor="password"
                    className="text-[#2C2F3C] font-[500]"
                  >
                    Password <span className="text-[#BF2018]">*</span>
                  </label>
                  <input
                    className="border p-4 rounded-xl"
                    type="password"
                    name="password"
                    placeholder="min. 8 characters"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <label
                    htmlFor="password"
                    className="text-[#2C2F3C] font-[500]"
                  >
                    Re-type Password <span className="text-[#BF2018]">*</span>
                  </label>
                  <input
                    className="border p-4 rounded-xl"
                    type="text"
                    name="Re-type Password"
                    placeholder="min. 8 characters"
                    required
                  />
                </div>

                <div>
                  <Button text="Reset Password" className="!w-full" />
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
