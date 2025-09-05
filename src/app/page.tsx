"use client";
import { useState } from "react";
import Deck from "./components/Deck";
import Start from "./components/Start";

export default function Home() {
  const [resetCounter, setResetCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleReset = () => {
    setResetCounter((prev) => prev + 1);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <Start onReset={handleReset} gameOver={gameOver} />
      <Deck resetTrigger={resetCounter} onGameOver={setGameOver} />
    </div>
  );
}
