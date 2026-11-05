
import WordCounterTool from "./word-counter-tool";

export const metadata = {
  title: "Word Counter - Free Online Word & Character Counter | ToolNest",
  description:
    "Count words, characters, sentences, and paragraphs instantly with ToolNest's free online Word Counter. Check reading time and speaking time in real time.",
  keywords: [
    "word counter",
    "online word counter",
    "character counter",
    "word count tool",
    "sentence counter",
    "paragraph counter",
    "reading time calculator",
  ],
  openGraph: {
    title: "Free Word Counter & Character Counter | ToolNest",
    description:
      "Count words, characters, sentences, and paragraphs online. Free, fast, and easy to use.",
    siteName: "ToolNest",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WordCounterTool />;
}
