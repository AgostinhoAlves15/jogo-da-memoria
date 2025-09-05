"use client";

export default function Card({
  value,
  isFlipped,
  onClick,
}: {
  value: string;
  isFlipped: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center bg-white rounded-lg h-24 w-20 cursor-pointer select-none shadow-md mt-3"
    >
      {isFlipped ? (
        <img src={value} alt="carta" className="w-16 h-16" />
      ) : (
        <img
          src="https://ivanfarina08.github.io/Jogos/img/virada.png"
          alt="verso"
          className="w-full h-full rounded"
        />
      )}
    </div>
  );
}
