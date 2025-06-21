export const codeExamples: any = {
    python: `from corethink import Corethink

client = Corethink()  # auth defaults to os.environ.get("CORETHINK_API_KEY")

response = client.chat.completions.create(
  model="deepseek-ai/DeepSeek-V3",
  messages=[
    { "role": "user", "content": "What are some fun things to do in New York?" }
  ]
)

print(response.choices[0].message.content)`,

    typescript: `import { Corethink } from "corethink";

const client = new Corethink(process.env.CORETHINK_API_KEY);

const response = await client.chat.completions.create({
  model: "deepseek-ai/DeepSeek-V3",
  messages: [
    { role: "user", content: "What are some fun things to do in New York?" }
  ]
});

console.log(response.choices[0].message.content);`,

    curl: `curl https://api.corethink.ai/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-ai/DeepSeek-V3",
    "messages": [
      { "role": "user", "content": "What are some fun things to do in New York?" }
    ]
  }'`
};

export const languageMap: Record<string, string> = {
    python: 'python',
    typescript: 'typescript',
    curl: 'bash',
};