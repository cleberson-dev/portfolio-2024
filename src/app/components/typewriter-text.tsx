import cls from "classnames";

export default function TypewriterText({ text }: { text: string }) {
  return (
    <span className="inline-block">
      <span
        className={cls(
          "block w-0 overflow-hidden whitespace-nowrap tracking-widest",
          "border-solid border-purple-600 border-r-[.15em]",
          "animate-typing"
        )}
        style={{
          animationTimingFunction: `steps(${text.length})`,
          animationFillMode: "forwards",
        }}
      >
        {text}
      </span>
    </span>
  );
}
