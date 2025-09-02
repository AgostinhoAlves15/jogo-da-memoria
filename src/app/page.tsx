import { SiJavascript,  SiReact,  SiHtml5,  SiCss3,
         SiPython,  SiNestjs,  SiExpress,  SiNextdotjs} from "react-icons/si";

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

  const cards = icons.flatMap((icon) => [
    { id: crypto.randomUUID(), value: icon },
    { id: crypto.randomUUID(), value: icon },
  ]);

  return (
    <div className="grid grid-cols-4 gap-3 max-w-[600px] mx-auto mt-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex items-center justify-center bg-blue-400 rounded-lg h-20 font-bold"
        >
          {card.value}
        </div>
      ))}
    </div>
  );
}
