"use client";
import { useState, useEffect } from "react";

interface StartProps {
  onReset: () => void;
  gameOver: boolean;
}
export default function Start({ onReset, gameOver }: StartProps) {
  const [tempo, setTempo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalo = setInterval(() => {
      setTempo((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [isRunning]);

  useEffect(() => {
    if (gameOver) {
      setIsRunning(false);
    }
  }, [gameOver]);

  const handleReset = () => {
    setIsRunning(false);
    setTempo(0);
    onReset();
  };

  return (
    <div className="flex gap-4 items-center mt-4">
      <button
        onClick={() => setIsRunning(true)}
        disabled={gameOver}
        className="bg-green-600 px-4 py-2 rounded text-white disabled:opacity-50"
      >
        Iniciar
      </button>

      <button
        onClick={handleReset}
        className="bg-red-600 px-4 py-2 rounded text-white"
      >
        Reiniciar
      </button>

      <div className="bg-gray-600 px-4 py-2 rounded text-white">
        Tempo: {tempo}s
      </div>
    </div>
  );
}
