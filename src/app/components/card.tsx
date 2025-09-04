"use client";

export default function Card({ value, isFlipped, onClick }: 
  { value: string; isFlipped: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center bg-blue-400 rounded-lg h-20 w-20 cursor-pointer select-none"
    >
      {isFlipped ? <img src={value} alt="carta" className="w-12 h-12" /> : "❓"}
    </div>
  );
}
