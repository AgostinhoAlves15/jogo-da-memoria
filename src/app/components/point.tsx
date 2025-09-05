"use client";
import { useState, useEffect } from "react";

interface ScoreProps {
  matched: string[];
}

export default function Score({ matched }: ScoreProps) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const pairsFound = Math.floor(matched.length / 2);
    setScore(pairsFound * 5);
  }, [matched]);

  return (
    <div className="text-xl font-bold mt-4">Pontuação: {score} /40 pontos</div>
  );
}
