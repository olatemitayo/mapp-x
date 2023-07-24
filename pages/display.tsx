import Button from "@/components/test/button";
import Show from "@/components/test/show";
import React, { useState } from "react";

export default function () {
  const [next, setNext] = useState(0);
  return (
    <div className="flex justify-center gap-3">
      <Button setNext={setNext} next={next} />
      <Show next={next} />
    </div>
  );
}
