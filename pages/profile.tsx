import Pages from "@/components/dashboard/pages";
import Sidebar from "@/components/dashboard/sidebar";
import { BackgroundImage } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/components/database/profile";
import Latestfeo from "@/components/profile/latestfeo";

export default function Profile() {
  return (
    <>
      <main className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="py-6 flex flex-col px-5  bg-[#F5F5F6] overflow-auto">
          <Pages text="Profile" page={profile[0].name} />
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
                  <div className="" style={{ marginTop: "-4rem" }}>
                    <Image
                      width={120}
                      height={120}
                      alt="profile picture"
                      src={"/profilepic.svg"}
                    />
                  </div>
                  <div>
                    <h1 className="text-[#4A4C58] font-semibold">
                      {profile[0].name}
                    </h1>
                    <p className="text-[#8F9198] ">{profile[0].role}</p>
                  </div>
                </div>
                <div className="text-[#bf2018]"> last login: 12h ago</div>
              </div>
            </div>
            {/* profile footer  */}
            <div className="mt-5 flex  justify-between text-[14px]">
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
                        {profile[0].designation}
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
                        {profile[0].location}
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
                        {profile[0].email}
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
                      Designation:
                      <span className="#4A4C58 font-[600] ms-1">
                        {profile[0].designation}
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
                {/* FEO CONTENT  */}
                {/* <div className="flex flex-col gap-6 px-7 ">
                <div className="flex items-center justify-between gap-3"></div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-3">
                    <Image width={46} height={46} src={"/musa.png"} alt="img" />
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
                    <Image width={46} height={46} src={"/musa.png"} alt="img" />
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
                    <Image width={46} height={46} src={"/musa.png"} alt="img" />
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
              </div> */}
                <Latestfeo className="noshadow" />
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
