"use client";
import { useEffect, useMemo, useState } from "react";
import TypewriterText from "./typewriter-text";

const GREETING_DURATION_IN_MS = 3000;

type Props = {
  greetings: string[];
  callingMyName: string;
};

export default function Greeting({ greetings, callingMyName }: Props) {
  const [currentGreetingIdx, setCurrentGreetingIdx] = useState(0);
  const currentGreeting = useMemo(
    () => greetings[currentGreetingIdx % greetings.length] + "!",
    [currentGreetingIdx, greetings]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIdx((prevIdx) => prevIdx + 1);
    }, GREETING_DURATION_IN_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-xl">
      <TypewriterText text={currentGreeting} />
      <span className="block text-xs">{callingMyName}</span>
    </span>
  );
}
