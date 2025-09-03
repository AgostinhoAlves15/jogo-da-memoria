"use client";
import Deck from "./components/Deck";
import Start from "./components/Start";

export default function Home() {
  return (
    <div className="max-w-[600px] mx-auto mt-3">
      {/* Deck de cartas */}
      <Deck />

      {/* Cronômetro */}
      <div className="mt-6">
        <Start />
      </div>
    </div>
  );
}
