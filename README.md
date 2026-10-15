# Portfolio Starter (Mission 12)

A React + Vite portfolio that is about 80% done. In class you finish it and connect it to Groq.

## Run it

```
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). You should see your portfolio with three dashed "paste the code block" boxes for Experience, Education and Projects.

## Where things live

| File | What it is |
|---|---|
| `src/data.js` | All the text and links on the site. Replace the samples with your own |
| `src/components/` | One file per section. Experience, Education and Projects are placeholders until you paste the code blocks |
| `src/components/AskAI.jsx` | The input box and the answer area |
| `src/groq.js` | The function that talks to Groq. A placeholder until you paste the code block |
| `src/index.css` | Minimal styles. Make it yours |

## Your API key

Create a file called `.env` in the project root (next to `package.json`) with one line, using the key from https://console.groq.com/keys:

```
VITE_GROQ_API_KEY=your-key-here
```

Restart `npm run dev` after creating or changing `.env`. `.env` is in `.gitignore`, so it will not be pushed to GitHub. Never commit your key.
