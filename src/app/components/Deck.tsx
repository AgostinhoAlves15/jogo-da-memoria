"use client";
import { useState, useEffect } from "react";
import Card from "./card";

export default function Deck({ resetTrigger }: { resetTrigger: number }) {
  const [cards, setCards] = useState<{ id: string; value: string }[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);

  useEffect(() => {
    const images = [
      "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", // python
      'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', // HTML
      "https://cdn-icons-png.flaticon.com/512/732/732190.png ",   // CSS
      "https://cdn-icons-png.flaticon.com/512/1126/1126012.png ",  // React
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png ",   // ts
      "https://cdn-icons-png.flaticon.com/512/5968/5968509.png ",   // js
      "https://cdn-icons-png.flaticon.com/512/226/226777.png ", // jjava
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png ",   // node
    ];

    const generated = images.flatMap((img, i) => [
      { id: `card-${i}-1`, value: img },
      { id: `card-${i}-2`, value: img },
    ]);

    setCards([...generated].sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
  }, [resetTrigger]);

  const handleClick = (id: string) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const firstCard = cards.find(c => c.id === first);
      const secondCard = cards.find(c => c.id === second);
      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3 mt-6">
      {cards.map(card => (
        <Card
          key={card.id}
          value={card.value}
          isFlipped={flipped.includes(card.id) || matched.includes(card.id)}
          onClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
}
