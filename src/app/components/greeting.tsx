"use client";
import { useEffect, useMemo, useState } from "react";

type Props = {
  greetings: string[];
};

export default function Greeting({ greetings }: Props) {
  const [currentGreetingIdx, setCurrentGreetingIdx] = useState(0);
  const currentGreeting = useMemo(
    () => greetings[currentGreetingIdx % greetings.length] + "!",
    [currentGreetingIdx, greetings]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIdx((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-xl">
      <span className="typewriter-container">
        <span
          className="typewriter"
          style={{
            animationTimingFunction: `steps(${currentGreeting.length})`,
          }}
        >
          {currentGreeting}
        </span>
      </span>
      <span className="block text-xs">I&apos;m</span>
    </span>
  );
}
