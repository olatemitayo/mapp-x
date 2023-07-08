import { Progress } from "@mantine/core";
import Image from "next/image";
import { Data } from "../farmers/famersdata";

import FarmerModal from "../feo/feomodal";
import Latestfeo from "../profile/latestfeo";

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
    progress: 37.5,
    img: "/Flag.svg",
  },
  {
    name: "Abidemi Victoria",
    farmers: "567",
    mapped: "324",
    progress: 37.5,
    img: "/Flag.svg",
  },
  {
    name: "Temitayo Olatunji",
    farmers: "567",
    mapped: "550",
    progress: 37.5,
    img: "/Flag.svg",
  },
  {
    name: "Adeniji Victoria",
    farmers: "455",
    mapped: "444",
    progress: 37.5,
    img: "/Flag.svg",
  },
  {
    name: "Lanre Wale",
    farmers: "367",
    mapped: "299",
    progress: 37.5,
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
  const Data: FEOData[] = FEOranking.sort(
    (a, b) => parseInt(b.mapped) - parseInt(a.mapped)
  );
  const highestMapped: FEOData[] = Data.slice(0, 4);
  return (
    <div className="flex flex-col ">
      {highestMapped.map((feo) => (
        <div
          key={feo.name}
          className="flex items-center justify-between font-semibold mb-7"
        >
          <div className="flex w-[20%] gap-2">
            <Image width={16} height={16} src={feo.img} alt={feo.name} />
            <h3 className="">{feo.name}</h3>
          </div>
          <div className="w-[20%] ">{feo.farmers}</div>
          <div className="w-[20%] ">{feo.mapped}</div>
          <div className="w-[20%]  flex flex-col">
            <h5 className="text-[10px]">{`${feo.progress}%`}</h5>
            <Progress color="red" value={feo.progress} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Feotable() {
  return (
    <div className="flex justify-between mt-[20px]">
      <div className="w-[69.5%] h-[345px] bg-white rounded-[20px] border-[1px] ">
        <div className="border-b-2 h-[120px] px-8 py-5 flex flex-col justify-between  ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">FEO Ranking</h2>
            <Image width={28} height={28} src="/feomore.svg" alt="feomore" />
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
            <h2 className="text-2xl font-semibold">FEOs</h2>
            <span className="bg-[#FCE9E8] text-[#BF2018] px-3 py-1 rounded-[32px]">
              {Data.length}
            </span>
          </div>
          <div className="relative">
            <FarmerModal />
            <Image
              width={24}
              height={24}
              src="/add_circle.svg"
              alt="add"
              className="absolute"
            />
          </div>
        </div>
        <div>
          <Latestfeo />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
