import React, { useContext, useState, useEffect } from "react";
import { AuthContext, ContextType, UserDetails } from "@/pages/_app";
import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/sidebar";
import { BackgroundImage } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import Latestfeo from "@/components/profile/latestfeo";
import withAuth from "@/components/protected-route";

function Profile() {
  const [payload, setPayload] = useState<UserDetails>({
    first_name: "",
    last_name: "",
    profile_picture: "",
    role: "",
    designation: "",
    email: "",
    location: "",
    phone_number: "",
  });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return (
    <>
      <main className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="py-6 flex flex-col px-5  bg-[#F5F5F6] overflow-auto">
          <Pages
            text="Profile"
            page={`${payload.last_name} ${payload.first_name}`}
          />
          <div className="flex-1 overflow-auto no-scrollbar">
            <div className="flex bg-white w-[100%] h-[40%]   mx-auto mt-8">
              <BackgroundImage
                src="/profilebg.svg"
                className="rounded-t-lg"
              ></BackgroundImage>
            </div>
            <div>
              <div className="flex items-center justify-between px-10 bg-white rounded-b-lg ">
                <div className="flex gap-3">
                  <div className="rounded-[50%]" style={{ marginTop: "-4rem" }}>
                    {payload?.role === "Admin" ? (
                      <img
                        src={"/adminn.jpg"}
                        alt="profilePic"
                        className="rounded-[50%] w-[120px] h-[120px]"
                      />
                    ) : (
                      <img
                        src={"/feoo.jpg"}
                        alt="profilePic"
                        className="rounded-[50%] w-[120px] h-[120px]"
                      />
                    )}
                  </div>
                  <div>
                    <h1 className="text-[#4A4C58] font-semibold">
                      {`${payload.last_name} ${payload.first_name}`}
                    </h1>
                    <p className="text-[#8F9198] ">{payload.role}</p>
                  </div>
                </div>
                <div className="text-[#bf2018]"> last login: 12h ago</div>
              </div>
            </div>
            {/* profile footer  */}
            <div className="mt-5 flex flex-wrap  justify-between text-[14px]">
              {/* ABOUT  */}
              <div className="bg-white w-[32%] flex flex-col  rounded-xl">
                <div className="border-b">
                  <h2 className="px-7 py-5 text-[18px] font-[700]">About</h2>
                </div>

                {/* ABOUT CONTENT  */}
                <div className="flex flex-col gap-8 py-5 px-7">
                  <div className="flex items-center gap-3">
                    <span>
                      <Image
                        width={16}
                        height={16}
                        alt="des"
                        src={"/des.svg"}
                      />
                    </span>
                    <p className="#4A4C58">
                      Designation:
                      <span className="#4A4C58 font-[600] ms-1">
                        {payload.designation}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <Image
                        width={16}
                        height={16}
                        alt="location"
                        src={"/location.svg"}
                      />
                    </span>
                    <p className="#4A4C58">
                      Location:
                      <span className="#4A4C58 font-[600] ms-1">
                        {payload.location}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <Image
                        width={16}
                        height={16}
                        alt="email"
                        src={"/email.svg"}
                      />
                    </span>
                    <p className="#4A4C58">
                      Email:
                      <span className="#4A4C58 font-[600] ms-1">
                        {payload.email}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <Image
                        width={16}
                        height={16}
                        alt="phone"
                        src={"/phone.svg"}
                      />
                    </span>
                    <p className="#4A4C58">
                      Phone:
                      <span className="#4A4C58 font-[600] ms-1">
                        {payload.phone_number}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* FEO CREATED  */}
              <div className="bg-white w-[32%] flex flex-col  rounded-xl">
                <div className="border-b">
                  <h2 className="px-7 py-5 text-[18px] font-[700]">
                    FEOs you created
                  </h2>
                </div>

                <Latestfeo className="noshadow !gap-[10px] " />
                <Link
                  href="/feos"
                  className="text-end px-7 pb-3 text-[#bf2018]"
                >
                  See all
                </Link>
              </div>

              {/* MAPPED FARM  */}
              <div className="bg-white w-[32%] flex flex-col  rounded-xl">
                <div className="border-b">
                  <h2 className="px-7 py-5 text-[18px] font-[700]">
                    Recently Mapped Farms
                  </h2>
                </div>
                {/* MAPPED CONTENT  */}
                <div className="flex flex-col gap-6 px-7 ">
                  <div className="flex items-center justify-between gap-3"></div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-3">
                      <Image
                        width={46}
                        height={46}
                        src={"/musa.png"}
                        alt="img"
                      />
                      <div>
                        <h5 className="font-semibold text-16">Musa Abdulahi</h5>
                        <p className="text-12 font-[500] text-[#C1C2C6]">
                          Katsina, Nigeria
                        </p>
                      </div>
                    </div>
                    <div>
                      <Image
                        width={24}
                        alt="edit"
                        height={24}
                        src={"/edit.svg"}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-3">
                      <Image
                        width={46}
                        height={46}
                        src={"/musa.png"}
                        alt="img"
                      />
                      <div>
                        <h5 className="font-semibold text-16">Musa Abdulahi</h5>
                        <p className="text-12 font-[500] text-[#C1C2C6]">
                          Katsina, Nigeria
                        </p>
                      </div>
                    </div>
                    <div>
                      <Image
                        width={24}
                        alt="edit"
                        height={24}
                        src={"/edit.svg"}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-3">
                      <Image
                        width={46}
                        height={46}
                        src={"/musa.png"}
                        alt="img"
                      />
                      <div>
                        <h5 className="font-semibold text-16">Musa Abdulahi</h5>
                        <p className="text-12 font-[500] text-[#C1C2C6]">
                          Katsina, Nigeria
                        </p>
                      </div>
                    </div>
                    <div>
                      <Image
                        width={24}
                        alt="edit"
                        height={24}
                        src={"/edit.svg"}
                      />
                    </div>
                  </div>
                </div>
                <Link
                  href="/feos"
                  className="text-end px-7 pb-3 text-[#bf2018]"
                >
                  See all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default withAuth(Profile);
