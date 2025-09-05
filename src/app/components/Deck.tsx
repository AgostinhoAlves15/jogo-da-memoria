"use client";
import { useState, useEffect } from "react";
import Card from "./card";
import Score from "./point";

interface CardType {
  id: string;
  value: string;
  pairId: number;
}

interface DeckProps {
  resetTrigger: number;
  onGameOver: (finished: boolean) => void;
}

export default function Deck({ resetTrigger, onGameOver }: DeckProps) {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const initializeCards = () => {
    const images = [
      "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", // py
      "https://cdn-icons-png.flaticon.com/512/1051/1051277.png", // HTML
      "https://cdn-icons-png.flaticon.com/512/732/732190.png", // CSS
      "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // React
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", // TS
      "https://cdn-icons-png.flaticon.com/512/5968/5968509.png", // JS
      "https://cdn-icons-png.flaticon.com/512/226/226777.png", // Java do mal
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", // Node
    ];

    const generated: CardType[] = images.flatMap((img, index) => [
      { id: `card-${index}-1`, value: img, pairId: index },
      { id: `card-${index}-2`, value: img, pairId: index },
    ]);

    const shuffled = [...generated].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameOver(false);
    onGameOver(false);
  };

  useEffect(() => {
    initializeCards();
  }, [resetTrigger]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const card1 = cards.find((c) => c.id === firstId);
      const card2 = cards.find((c) => c.id === secondId);

      if (card1 && card2 && card1.pairId === card2.pairId) {
        setMatchedCards((prev) => [...prev, firstId, secondId]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (cards.length > 0 && matchedCards.length === cards.length) {
      setGameOver(true);
      onGameOver(true);
    }
  }, [matchedCards, cards]);

  const handleClick = (id: string) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(id) || matchedCards.includes(id)) return;
    setFlippedCards((prev) => [...prev, id]);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            value={card.value}
            isFlipped={
              flippedCards.includes(card.id) || matchedCards.includes(card.id)
            }
            onClick={() => handleClick(card.id)}
          />
        ))}
      </div>

      <Score matched={matchedCards} />

      {gameOver && (
        <div className="mt-4 text-xl font-bold text-green-600">
          🎉 Parabéns! Você encontrou todos os pares!
        </div>
      )}
    </div>
  );
}
