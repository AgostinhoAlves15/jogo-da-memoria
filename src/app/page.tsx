"use client";
import { useState } from "react";
import Deck from "./components/Deck";
import Start from "./components/Start";

export default function Home() {
  const [resetCounter, setResetCounter] = useState(0);

  return (
    <div className="flex flex-col items-center mt-6">
      <Start onReset={() => setResetCounter(prev => prev + 1)} />
      <Deck resetTrigger={resetCounter} />
    </div>
  );}