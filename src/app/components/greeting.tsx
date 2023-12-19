"use client";
import { useEffect, useMemo, useState } from "react";
import info from "@/info.json";

export default function Greeting() {
  const [currentGreetingIdx, setCurrentGreetingIdx] = useState(0);
  const currentGreeting = useMemo(
    () => info.greetings[currentGreetingIdx % info.greetings.length],
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
