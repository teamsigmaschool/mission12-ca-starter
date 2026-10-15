import { skills } from "../data.js";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul className="tags">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
