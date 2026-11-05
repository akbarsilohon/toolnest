
"use client";

import { useMemo, useState } from "react";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/u).filter(Boolean).length
      : 0;

    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? (trimmed.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [])
          .filter((sentence) => sentence.trim()).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n+/).filter((paragraph) => paragraph.trim()).length
      : 0;

    const readingTime = Math.ceil(words / 200);
    const speakingTime = Math.ceil(words / 130);

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
      speakingTime,
    };
  }, [text]);

  async function copyText() {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied successfully!");
    } catch {
      alert("Unable to copy text. Please copy it manually.");
    }
  }

  function clearText() {
    setText("");
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              T
            </span>
            <span className="text-xl font-bold tracking-tight">
              Tool<span className="text-blue-600">Nest</span>
            </span>
          </a>

          <a
            href="/"
            className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="mb-9 text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              Text Tools
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              Word Counter
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Count words, characters, sentences, and paragraphs instantly.
              Analyze your text with our free online word counter.
            </p>
          </div>

          {/* Editor */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-bold">Your Text</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Start typing or paste your text below.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={copyText}
                  disabled={!text}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Copy Text
                </button>

                <button
                  onClick={clearText}
                  disabled={!text}
                  className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Clear
                </button>
              </div>
            </div>

            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Type or paste your text here..."
              className="min-h-[300px] w-full resize-y bg-white p-6 text-base leading-8 text-slate-700 outline-none placeholder:text-slate-300"
              spellCheck="false"
            />

            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-400">
              <span>Live text analysis</span>
              <span>{stats.characters} characters</span>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-7">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Text Statistics</h2>
              <p className="mt-1 text-sm text-slate-500">
                Your text analysis updates automatically.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Words",
                  value: stats.words,
                  icon: "📝",
                },
                {
                  label: "Characters",
                  value: stats.characters,
                  icon: "🔤",
                },
                {
                  label: "Characters (No Spaces)",
                  value: stats.charactersNoSpaces,
                  icon: "✂️",
                },
                {
                  label: "Sentences",
                  value: stats.sentences,
                  icon: "📄",
                },
                {
                  label: "Paragraphs",
                  value: stats.paragraphs,
                  icon: "📚",
                },
                {
                  label: "Reading Time",
                  value: `${stats.readingTime} min`,
                  icon: "⏱️",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      {stat.label}
                    </span>
                    <span className="text-xl">{stat.icon}</span>
                  </div>

                  <p className="mt-4 text-3xl font-extrabold tracking-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
            <h2 className="text-lg font-bold">Estimated Speaking Time</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Based on an average speaking speed of 130 words per minute.
            </p>
            <p className="mt-4 text-2xl font-extrabold text-blue-600">
              {stats.speakingTime} minute(s)
            </p>
          </div>

          {/* About Tool */}
          <article className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold">
              What Is a Word Counter?
            </h2>

            <p className="leading-7 text-slate-600">
              A word counter is an online tool that helps you measure the
              length of written content. It can count words, characters,
              sentences, and paragraphs in seconds.
            </p>

            <p className="leading-7 text-slate-600">
              Whether you are writing an article, preparing an assignment,
              creating social media content, or editing website copy, knowing
              your word count can help you organize your writing more
              effectively.
            </p>

            <h2 className="pt-4 text-2xl font-bold">
              How to Use This Word Counter
            </h2>

            <ol className="list-inside list-decimal space-y-2 leading-7 text-slate-600">
              <li>Type or paste your text into the text editor.</li>
              <li>View your word and character counts instantly.</li>
              <li>Check sentence and paragraph statistics.</li>
              <li>Copy your text or clear the editor when finished.</li>
            </ol>

            <h2 className="pt-4 text-2xl font-bold">
              Is My Text Stored on a Server?
            </h2>

            <p className="leading-7 text-slate-600">
              No. Text analysis happens directly in your browser. The text
              entered into this tool is not sent to a ToolNest server for
              counting.
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© 2026 ToolNest. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/about" className="hover:text-blue-600">
              About
            </a>
            <a href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
