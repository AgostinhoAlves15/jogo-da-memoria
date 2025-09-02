"use client";
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiPython, SiNestjs, SiExpress, SiNextdotjs } from "react-icons/si";
import Card from "./components/card";

export default function Home() {
  const icons = [
    <SiCss3 size={36} />,
    <SiExpress size={36} />,
    <SiHtml5 size={36} />,
    <SiJavascript size={36} />,
    <SiNestjs size={36} />,
    <SiNextdotjs size={36} />,
    <SiPython size={36} />,
    <SiReact size={36} />,
  ];

  // cria os pares
  const cards = icons.flatMap((icon) => [
    { id: crypto.randomUUID(), value: icon },
    { id: crypto.randomUUID(), value: icon },
  ]);

  // embaralha as cartas
  const shuffled = cards.sort(() => Math.random() - 0.5);

  return (
    <div className="grid grid-cols-4 gap-3 max-w-[600px] mx-auto mt-3">
      {shuffled.map((card) => (
        <Card key={card.id} value={card.value} />
      ))}
    </div>
  );
}
