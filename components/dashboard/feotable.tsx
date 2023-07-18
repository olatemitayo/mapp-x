import { Progress } from "@mantine/core";
import Image from "next/image";
import { Data } from "../farmers/famersdata";

import Latestfeo from "../profile/latestfeo";
import { useEffect, useState } from "react";
import { UserDetails } from "@/pages/_app";
import FeoModal from "../admin/feomodal";

interface FEOData {
  name: string;
  farmers: string;
  mapped: string;
  progress: number;
  img: string;
}

const FEOranking: FEOData[] = [
  {
    name: "Taiwo Johnson",
    farmers: "123",
    mapped: "101",
    progress: 100,
    img: "/usa.svg",
  },
  {
    name: "Musa Abdullahi",
    farmers: "345",
    mapped: "89",
    progress: 78.1,
    img: "/Uganda.svg",
  },
  {
    name: "Ajayi Daniel",
    farmers: "231",
    mapped: "200",
    progress: 45.6,
    img: "/Kenya.svg",
  },
  {
    name: "Fabiyi Victoria",
    farmers: "567",
    mapped: "400",
    progress: 55.5,
    img: "/kenya.svg",
  },
  {
    name: "Abidemi Victoria",
    farmers: "567",
    mapped: "324",
    progress: 54.5,
    img: "/Flag.svg",
  },
  {
    name: "Temitayo Olatunji",
    farmers: "567",
    mapped: "550",
    progress: 97,
    img: "/Flag.svg",
  },
  {
    name: "Adeniji Victoria",
    farmers: "455",
    mapped: "444",
    progress: 78.5,
    img: "/USA.svg",
  },
  {
    name: "Lanre Wale",
    farmers: "367",
    mapped: "299",
    progress: 77.5,
    img: "/Flag.svg",
  },
  {
    name: "Fabiyi Olubiyi",
    farmers: "567",
    mapped: "99",
    progress: 37.5,
    img: "/Flag.svg",
  },
];

export function Individual(): JSX.Element {
  //to get the top 4 FEOs with highest number of mapping
  // const Data: FEOData[] = FEOranking.sort(
  //   (a, b) => parseInt(b.mapped) - parseInt(a.mapped)
  // );
  // const highestMapped: FEOData[] = Data.slice(0, 4);
  const [rank, setRank] = useState([]);
  const rankFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch("https://mapx.onrender.com/api/feo/ranking/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setRank(data);
    } catch (error) {}
  };

  useEffect(() => {
    rankFetch();
  }, []);

  const [slice, setSlice] = useState("");
  return (
    <div className="flex flex-col ">
      {rank.map((feo) => (
        <div
          key={feo.name}
          className="flex items-center justify-between font-semibold mb-7"
        >
          <div className="flex w-[20%] gap-2">
            <Image width={16} height={16} src={"Flag.svg"} alt={feo.name} />
            <h3 className="">{feo.name}</h3>
          </div>
          <div className="w-[20%] ">{feo.registered_farmers}</div>
          <div className="w-[20%] ">{feo.mapped_farmlands}</div>
          <div className="w-[20%]  flex flex-col">
            <h5 className="text-[10px]">{+feo.progress_level.toFixed()}%</h5>
            <Progress color="red" value={feo.progress_level} />
          </div>
        </div>
      ))}
    </div>
  );
}

interface FEOtableProp {
  id?: any;
}

export default function Feotable({ id }: FEOtableProp) {
  const [payload, setPayload] = useState<UserDetails>({
    profile_picture: "",
    first_name: "",
    role: "",
  });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);

  return (
    <>
      {payload.role === "Admin" ? (
        <div className="flex justify-between mt-[20px]">
          <div className="w-[69.5%] h-[345px] bg-white rounded-[20px] border-[1px] ">
            <div className="border-b-2 h-[120px] px-8 py-5 flex flex-col justify-between  ">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">FEO Ranking</h2>
                <Image
                  width={28}
                  height={28}
                  src="/feomore.svg"
                  alt="feomore"
                />
              </div>
              <div className="flex items-center justify-between text-[14px] text-[#8F9198] ">
                <div className="w-[20%]">NAME</div>
                <div className="w-[20%]">NO OF FARMERS</div>
                <div className="w-[20%]">MAPPED FARMLAND</div>
                <div className="w-[20%]">PROGRESS</div>
              </div>
            </div>
            <div className="flex flex-col justify-between px-8 py-5">
              <Individual />
            </div>
          </div>
          <div className="w-[29.5%] h-[345px] bg-white rounded-[20px] border-[1px] px-8 py-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <h2 className="text-2xl font-semibold">Latest FEOs</h2>
              </div>
              <div className="relative">
                <FeoModal />
                <Image
                  width={24}
                  height={24}
                  src="/add_circle.svg"
                  alt="add"
                  className="absolute"
                />
              </div>
            </div>
            {}
            <div>
              <Latestfeo className="!gap-6" />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
