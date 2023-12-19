const socials = [
  { href: "https://www.linkedin.com/in/clebersondev", title: "Linkedin" },
  { href: "https://www.github.com/cleberson-dev", title: "GitHub" },
  { href: "https://www.instagram.com/cbjr.dev", title: "Instagram" },
];

export default function SocialNetworks() {
  return (
    <ul>
      {socials.map((social) => (
        <li
          key={social.href}
          className={`
            lowercase flex flex-col items-center transition-colors hover:text-white/50
            after:block after:my-1 after:w-1 after:h-1 after:bg-white/10 after:rounded-full 
            last:after:hidden
          `}
        >
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            {social.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
