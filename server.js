import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3000;

const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = "openai/gpt-oss-120b:free";

if (!API_KEY) {
  console.error("Configure OPENROUTER_API_KEY no .env");
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    status: "Funcionando",
    model: MODEL
  });
});

app.post("/api/llm", async (req, res) => {
  try {

    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        erro: "Informe um tema."
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-OpenRouter-Title": "Gerador de Questoes ADS"
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: "system",
              content: `
Você é um professor universitário de ADS.

Sua tarefa é criar questões para revisão de provas.

Sempre gere:

- 5 questões de múltipla escolha
- 4 alternativas por questão
- Gabarito ao final
- Explicação resumida das respostas

Use linguagem simples e didática.
`
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
          max_completion_tokens: 700
        })
      }
    );

    if (!response.ok) {
      const erro = await response.text();

      return res.status(500).json({
        erro
      });
    }

    const data = await response.json();

    res.json({
      resposta: data.choices[0].message.content
    });

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });

  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});