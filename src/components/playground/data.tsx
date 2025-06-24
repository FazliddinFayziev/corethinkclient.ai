export const codeExamples = [
  {
    label: 'Python',
    language: 'python',
    code: `
from corethink import Corethink

client = Corethink()  # auth defaults to os.environ.get("CORETHINK_API_KEY")

response = client.chat.completions.create(
  model="deepseek-ai/DeepSeek-V3",
  messages=[
    { "role": "user", "content": "What are some fun things to do in New York?" }
  ]
)

print(response.choices[0].message.content)
    `,
  },
  {
    label: 'TypeScript',
    language: 'typescript',
    code: `
import { Corethink } from "corethink";

const client = new Corethink(process.env.CORETHINK_API_KEY);

const response = await client.chat.completions.create({
  model: "deepseek-ai/DeepSeek-V3",
  messages: [
    { role: "user", content: "What are some fun things to do in New York?" }
  ]
});

console.log(response.choices[0].message.content);
    `,
  },
  {
    label: 'cURL',
    language: 'bash',
    code: `
curl https://api.corethink.ai/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-ai/DeepSeek-V3",
    "messages": [
      { "role": "user", "content": "What are some fun things to do in New York?" }
    ]
  }'
    `,
  },
];


export const SUGGESTED_PROMPTS = [
  "Quantum entanglement explained",
  "AI's impact on philosophy",
  "Gödel's incompleteness theorems",
  "Kant vs Nietzsche on morality",
  "Blockchain for beginners",
  "Future of consciousness studies",
  "Bayesian reasoning basics",
  "Hard problem of consciousness",
  "Eastern vs Western logic",
  "Elegance in mathematical proofs",
  "Chinese Room argument",
  "Causality vs correlation",
  "The trolley problem",
  "Emergence in complex systems",
  "Potential alien mathematics",
  "Computational theory of mind",
  "Simulation hypothesis",
  "Fermi paradox explained",
  "Game theory in AI",
  "Understanding qualia"
];
