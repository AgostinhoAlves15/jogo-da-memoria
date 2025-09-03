"use client";
import { useState } from "react";

interface CardProps {
  value: string;
}

export default function Card({ value }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="flex items-center justify-center bg-blue-400 rounded-lg h-20 w-20 font-bold cursor-pointer select-none"
    >
      {flipped ? (
        <img src={value} alt="carta" className="w-12 h-12" />
      ) : (
        "❓"
      )}
    </div>
  );
}
