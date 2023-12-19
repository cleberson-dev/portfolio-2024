"use client";
import { useEffect, useMemo, useState } from "react";

type Props = {
  greetings: string[];
};

export default function Greeting({ greetings }: Props) {
  const [currentGreetingIdx, setCurrentGreetingIdx] = useState(0);
  const currentGreeting = useMemo(
    () => greetings[currentGreetingIdx % greetings.length],
    [currentGreetingIdx, greetings]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIdx((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-2xl">{currentGreeting}! I&apos;m</span>;
}
