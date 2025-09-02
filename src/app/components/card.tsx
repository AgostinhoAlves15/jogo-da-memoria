"use client";
import { JSX, useState } from "react";

interface CardProps {
  value: JSX.Element; 
}

export default function Card({ value }: CardProps) {
    
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="flex items-center justify-center bg-blue-400 rounded-lg h-20 w-20 font-bold cursor-pointer select-none"
    >
      {flipped ? value : "❓"}
    </div>
  );
}
