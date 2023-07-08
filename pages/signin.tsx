import { useRef, useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import AuthImg from "@/components/auth/auth-img";
import Button from "@/components/auth/button";
import AuthText from "@/components/auth/auth-text";
import { PasswordInput, TextInput } from "@mantine/core";

export default function SignIn() {
  // const Login: React.FC = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLDivElement | null>(null);

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser("");
    setPassword("");
    console.log(user, password);
  };
  return (
    <>
      <main className="flex">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        ></p>
        <div className="w-[53%] h-[100vh] flex flex-col justify-center items-center text-start ">
          <div className="w-[60%]">
            <AuthText
              header="Sign In"
              para="Enter your email and password to sign in!"
            />
            <form
              action=""
              onClick={handleSubmit}
              className="mt-[72px] flex flex-col gap-6"
            >
              <div className="grid gap-3">
                <TextInput
                  placeholder="mail@africanexchange.com"
                  label="Email address"
                  radius="md"
                  withAsterisk
                  required
                  ref={userRef}
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  classNames={{
                    input: "text-[#2C2F3C] rounded-[0.75rem]  py-7 text-[14px]",
                    label: "text-[16px] mb-4",
                  }}
                />

                <PasswordInput
                  placeholder="Min. 8 characters"
                  label="Password"
                  withAsterisk
                  required
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  classNames={{
                    input:
                      "text-[#2C2F3C] rounded-[0.75rem] py-7 text-[14px] flex items-center self-center ",
                    label: "text-[16px] mb-4",
                    innerInput: "py-7",
                    visibilityToggle: "hover:bg-white",
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="text-red-500 form-checkbox checked:text-red-500"
                  />
                  <p>keep me logged in</p>
                </div>
                <Link href="/forgot-password">
                  <p className="text-[#BF2018] font-[500] text-[14px]">
                    Forgot password?
                  </p>
                </Link>
              </div>
              <div>
                <Button text="Sign In" className="!w-full" />
              </div>
            </form>
          </div>
        </div>
        <div className="w-[47%]">
          <AuthImg />
        </div>
      </main>
    </>
  );
}
