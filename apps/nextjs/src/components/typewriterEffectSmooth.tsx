"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "Desenvolva",
    },
    {
      text: "treinos",
    },
    {
      text: "incríveis",
    },
    {
      text: "e",
    },
    {
      text: "alcance",
    },
    {
      text: "seus",
    },
    {
      text: "objetivos",
    },
    {
      text: "rapidamente.",
      className: "text-blue-500",
    },
  ];
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
