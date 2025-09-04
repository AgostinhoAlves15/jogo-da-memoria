"use client";
import { useState, useEffect } from "react";

export default function Start({ onReset }: { onReset: () => void }) {
  const [tempo, setTempo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => setTempo(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTempo(0);
    onReset();
  };

  return (
    <div className="flex gap-4 items-center">
      <button onClick={() => setIsRunning(true)} className="bg-green-600 px-4 py-2 rounded text-white">
        Iniciar
      </button>
      <button onClick={handleReset} className="bg-red-600 px-4 py-2 rounded text-white">
        Reiniciar
      </button>
      <div className="bg-gray-600 px-4 py-2 rounded text-white">Tempo: {tempo}s</div>
    </div>
  );
}
