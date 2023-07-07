import React from "react";

interface AuthTextProps {
  header: string;
  para: string;
}

export default function AuthText({ header, para }: AuthTextProps) {
  return (
    <div>
      <h2 className="font-[700] text=[#101828]  text-2xl">{header}</h2>
      <p className="text-base text-[#8F9198] mt-[8px]">{para}</p>
    </div>
  );
}
