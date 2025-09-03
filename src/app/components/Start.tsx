"use client";
import { useState, useEffect } from "react";

export default function Start() {
  const [tempo, setTempo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalo = setInterval(() => {
      setTempo((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [isRunning]);

  return (
    <div className="flex gap-4 items-center mt-4">
      <button
        onClick={() => setIsRunning(true)}
        className="bg-green-600 px-4 py-2 rounded text-white"
      >
        Iniciar
      </button>

      <button
        onClick={() => {
          setIsRunning(false);
          setTempo(0);
        }}
        className="bg-red-600 px-4 py-2 rounded text-white"
      >
        desistir
      </button>

      <div className="bg-gray-600 px-4 py-2 rounded text-white">
        Tempo: {tempo}s
      </div>
    </div>
  );
}
