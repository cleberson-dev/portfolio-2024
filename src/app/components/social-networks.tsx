import cls from "classnames";
import info from "@/info.json";

export default function SocialNetworks() {
  return (
    <ul>
      {info.socials.map((social) => (
        <li
          key={social.href}
          className={cls([
            "lowercase flex flex-col items-center transition-colors hover:text-white/50",
            "after:block after:my-1 after:w-1 after:h-1 after:bg-white/10 after:rounded-full",
            "last:after:hidden",
          ])}
        >
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            {social.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
