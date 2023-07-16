import Link from "next/link";
import AuthImg from "@/components/auth/auth-img";
import Button from "@/components/auth/button";
import AuthText from "@/components/auth/auth-text";
import Image from "next/image";
import { TextInput } from "@mantine/core";

export default function ForgotPassword() {
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
                header="Forgot Your Password"
                para="No worries, you just need to type your email address and we will send the verification code"
              />
              <form action="" className="mt-[40px] flex flex-col gap-6">
                <TextInput
                  placeholder="mail@africanexchange.com"
                  label="Email address"
                  radius="md"
                  withAsterisk
                  required
                  classNames={{
                    input: "text-[#2C2F3C] rounded-[0.75rem]  py-7 text-[14px]",
                    label: "text-[16px] mb-4",
                  }}
                />

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
