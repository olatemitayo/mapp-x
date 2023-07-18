import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import router from "next/router";
import { isNotEmpty, useForm } from "@mantine/form";
import AuthImg from "@/components/auth/auth-img";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/auth/button";
import AuthText from "@/components/auth/auth-text";
import { LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";

interface UserProps {
  email: string;
  password: string;
}
export default function SignIn() {
  const [visible, setVisible] = useState(false);
  const Login = (value: UserProps) => {
    axios
      .post("https://mapx.onrender.com/accounts/api/loginapi/", {
        email: value.email,
        password: value.password,
      })
      .then(function (res) {
        if (res.data) {
          localStorage.setItem("my-user", JSON.stringify(res.data));
          setVisible(true);
          router.push("/dashboard");
        }
      })
      .catch(function (error) {
        setVisible(false);
        toast.error("Invalid login details");
      });
  };

  const [userDetails, setUserDetails] = useState<UserProps>({
    email: "",
    password: "",
  });

  const form = useForm({
    initialValues: { email: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: isNotEmpty(),
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Login(userDetails);
  };

  return (
    <>
      <main className="flex">
        <ToastContainer toastClassName="customToast" />

        <div className="w-[53%] h-[100vh] flex flex-col justify-center items-center text-start ">
          <div className="sm:w-[90%] lg:w-[60%]">
            <AuthText
              header="Sign In"
              para="Enter your email and password to sign in!"
            />
            <form
              action=""
              onSubmit={form.onSubmit((value) => {
                Login(value);
              })}
              className="mt-[72px] flex flex-col gap-6"
            >
              <div className="grid gap-3">
                <TextInput
                  placeholder="mail@africanexchange.com"
                  label="Email address"
                  radius="md"
                  withAsterisk
                  type="email"
                  id="email"
                  {...form.getInputProps("email")}
                  required
                  autoComplete="off"
                  classNames={{
                    input: "text-[#2C2F3C] rounded-[0.75rem]  py-7 text-[14px]",
                    label: "text-[clamp(12px, 1vw, 16px)] mb-4",
                  }}
                />

                <PasswordInput
                  placeholder="Min. 8 characters"
                  label="Password"
                  withAsterisk
                  required
                  {...form.getInputProps("password")}
                  id="password"
                  classNames={{
                    input:
                      "text-[#2C2F3C] rounded-[0.75rem] py-7 text-[14px] flex items-center self-center ",
                    label: "text-[clamp(12px, 1vw, 16px)] mb-4",
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
                  <p className="text-[12px]">keep me logged in</p>
                </div>
                <Link href="/forgot-password">
                  <p className="text-[#BF2018] font-[500] text-[12px]">
                    Forgot password?
                  </p>
                </Link>
              </div>
              <div>
                <Button
                  text="Sign In"
                  className="!w-full text-[clamp(12px, 1vw, 16px)]"
                >
                  <img src="/loading.svg" width={24} height={24} alt="" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[47%]">
          <AuthImg />
        </div>
      </main>
      <LoadingOverlay visible={visible} overlayBlur={2} />
    </>
  );
}
