import Image from "next/image";

const HeaderItems = [
  {
    Image: "/hfeos.svg",
    header: "FEOs",
    figure: "5,000",
    isReversed: false,
  },
  {
    Image: "/hmapped.svg",
    header: "Mapped Farmlands",
    figure: "574,000",
    change: "+23% since last month",
    isReversed: false,
  },
  {
    Image: "/bluemapped.svg",
    header: "Unmapped Farmland",
    figure: "2,000",
    isReversed: false,
  },
  {
    Image: "/flag.svg",
    header: "Highest Mapped Region",
    figure: "11,000",
    para: "farms",
    isReversed: true,
  },
  {
    Image: "/regfarmers.svg",
    header: "Registered Farmers",
    figure: "10,154",
    isReversed: false,
  },
  {
    Image: "/totallga.svg",
    header: "Total LGAs",
    figure: "2,935",
    isReversed: false,
  },
];

import React from "react";

export default function Headers() {
  return (
    <div className="flex items-center gap-6 mt-6 overflow-x-scroll no-scrollbar ">
      {HeaderItems.map((item) => (
        <div className="flex  min-w-[280px] min-h-[100px] items-center w-[20%] rounded-2xl gap-3 justify-start ps-4 bg-white">
          <figure>
            <Image width={70} height={70} src={item.Image} alt={item.header} />
          </figure>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-sm">{item.header}</h4>
            <h2 className="text-2xl font-[600] text-[#252735]">
              {item.figure}
            </h2>
            <p>{item.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// interface HeaderProps {
//   image: string;
//   header: string;
//   figure: string;
//   change?: string;
//   paragraph?: string;
//   className?: string;
// }

// export default function Headers({
//   image,
//   header,
//   figure,
//   change,
//   paragraph,
//   className,
// }: HeaderProps) {
//   return (
//     <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-2xl">
//       <figure>
//         <Image width={56} height={56} src={image} alt="header" />
//       </figure>
//       <div className={clsx("flex flex-col gap-[2px]", className)}>
//         <p className={clsx("text-sm", className)}>{header}</p>
//         <h2 className={clsx("text-2xl font-[600] text-[#252735]", className)}>
//           {figure}
//         </h2>
//         <p className={clsx(className)}>
//           {change} <span>{paragraph}</span>
//         </p>
//       </div>
//     </div>
//   );
// }
