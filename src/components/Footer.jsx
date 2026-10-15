import { links } from "../data.js";

export default function Footer() {
  return (
    <footer>
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </footer>
  );
}
