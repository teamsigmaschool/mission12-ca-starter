import { profile } from "../data.js";

export default function Header() {
  return (
    <header>
      <h1>{profile.name}</h1>
      <p className="title">{profile.title}</p>
      <p>{profile.intro}</p>
    </header>
  );
}
