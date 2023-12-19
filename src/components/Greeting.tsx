"use client";
import { useEffect, useMemo, useState } from "react";

const greetings = ["Hello", "Hi", "Greetings", "Welcome", "Hey"];

export default function Greeting() {
  const [currentGreetingIdx, setCurrentGreetingIdx] = useState(0);
  const currentGreeting = useMemo(
    () => greetings[currentGreetingIdx % greetings.length],
    [currentGreetingIdx]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIdx((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-2xl">{currentGreeting}! I&apos;m</span>;
}
