import Link from "next/link";
import Image from "next/image";
import { TextInput } from "@mantine/core";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import AuthImg from "@/components/auth/auth-img";
import Button from "@/components/auth/button";
import AuthText from "@/components/auth/auth-text";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const forgetpassword = async () => {
    try {
      const res = await fetch(
        "https://mapx.onrender.com/accounts/api/forgot_password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: password }),
        }
      );

      if (res.ok) router.push(`/verify?email=${password}`);

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    forgetpassword();
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <main className="flex">
        <div className="w-[53%] h-[100vh] flex flex-col justify-center items-center text-start relative">
          <Link
            href="/signin"
            className="flex items-center absolute top-[20px] text-start sm:w-[85%] lg:w-[60%]"
          >
            <Image height={24} width={24} alt="goback" src="/arrowBack.svg" />
            <p className="text-base text-[#8F9198]">Back to sign in</p>
          </Link>
          <div className="sm:w-[85%] lg:w-[60%]">
            <div>
              <AuthText
                header="Forgot Your Password"
                para="No worries, you just need to type your email address and we will send the verification code"
              />
              <form
                action=""
                onSubmit={handlesubmit}
                className="mt-[40px] flex flex-col gap-6"
              >
                <TextInput
                  placeholder="mail@africanexchange.com"
                  label="Email address"
                  onChange={handlePasswordChange}
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
