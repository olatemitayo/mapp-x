import React from "react";

export default function Button({ setNext, next }) {
  return (
    <button
      onClick={() => setNext(next + 1)}
      className="cursor-pointer bg-[#bf2018] p-2 rounded-lg"
    >
      next
    </button>
  );
}
