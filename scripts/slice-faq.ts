import fs from "fs";
import path from "path";
import { LLama } from "./libs/llama";

// Summarize next article under 6 lines in korean to make people have interest of the article and return the summary only without any markdown syntax:
const prompt = (content: string) => `
You are a English-Korean translator. Translate next contents into korean following next rules:
- Do not translate pronoun
- keep the structure of QnA
- Answer translation only
${content}
`;

export const translate = async (content: string) => {
  try {
    return LLama.postGenerate(prompt(content));
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  const content = fs.readFileSync(path.resolve("articles/faq.md"), {
    encoding: "utf8",
  });

  const lines = content.split("\n");

  const results: string[] = [];

  const qna: string[] = [];
  for (const line of lines) {
    if (qna.length && line.startsWith("Q:")) {
      const result = await translate(qna.join("\n"));
      console.log("---");
      console.log(qna.join("\n"));
      console.log(result);
      console.log("---");
      if (result) results.push(result);
      qna.splice(0, qna.length);
    }
    qna.push(line);
  }

  fs.writeFileSync(path.resolve("articles/faq-ko.md"), results.join("\n\n"), {
    encoding: "utf8",
  });
})();
