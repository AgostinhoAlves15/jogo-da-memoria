"use client";
import { useState, useEffect } from "react";
import Card from "./card";

interface CardType {
  id: string;
  value: string;
  pairId: number;
}

export default function Deck() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const images = [
      "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", // python
      'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', // HTML
      "https://cdn-icons-png.flaticon.com/512/919/919826.png",   // CSS
      "https://cdn-icons-png.flaticon.com/512/1126/1126012.png ",  // React
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png ",   // ts
      "https://cdn-icons-png.flaticon.com/512/5968/5968509.png ",   // js
      "https://cdn-icons-png.flaticon.com/512/226/226777.png ", // jjava
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png ",   // node
    ];

    const generated: CardType[] = images.flatMap((img, index) => [
      { id: `card-${index}-1`, value: img, pairId: index },
      { id: `card-${index}-2`, value: img, pairId: index },
    ]);

    const shuffled = [...generated].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  if (cards.length === 0) return null;

  return (
    <div className="grid grid-cols-4 gap-3">
      {cards.map((card) => (
        <Card key={card.id} value={card.value} />
      ))}
    </div>
  );
}
