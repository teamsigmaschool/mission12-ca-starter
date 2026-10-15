import { useState } from "react";
import { askGroq } from "../groq.js";

export default function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleAsk() {
    const reply = await askGroq(question);
    setAnswer(reply);
  }

  return (
    <section>
      <h2>Ask the AI about me</h2>
      <div className="ask">
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="e.g. What is this person good at?"
        />
        <button onClick={handleAsk}>Ask</button>
      </div>
      <p className="answer">{answer}</p>
    </section>
  );
}
