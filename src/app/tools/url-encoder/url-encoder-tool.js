
"use client";

import { useState } from "react";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [status, setStatus] = useState(null);

  function processText() {
    if (!input.trim()) {
      setOutput("");
      setStatus({
        type: "error",
        message: "Please enter a URL or text first.",
      });
      return;
    }

    try {
      const result =
        mode === "encode"
          ? encodeURIComponent(input)
          : decodeURIComponent(input);

      setOutput(result);

      setStatus({
        type: "success",
        message:
          mode === "encode"
            ? "Text successfully encoded."
            : "URL successfully decoded.",
      });
    } catch {
      setOutput("");

      setStatus({
        type: "error",
        message:
          "Invalid URL encoding. Please check your input and try again.",
      });
    }
  }

  async function copyOutput() {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);

      setStatus({
        type: "success",
        message: "Output copied successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Unable to copy output. Please copy it manually.",
      });
    }
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setStatus(null);
  }

  function swapMode() {
    if (!output) return;

    setInput(output);
    setOutput("");

    setMode((current) =>
      current === "encode" ? "decode" : "encode"
    );

    setStatus(null);
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">

          {/* Heading */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-600">
              Developer Tools
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              URL Encoder & Decoder
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Encode special characters in URLs or decode encoded
              strings into readable text. A simple and free online
              URL encoding tool.
            </p>
          </div>

          {/* Mode Selector */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">

              <button
                onClick={() => {
                  setMode("encode");
                  setInput("");
                  setOutput("");
                  setStatus(null);
                }}
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition ${
                  mode === "encode"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                Encode
              </button>

              <button
                onClick={() => {
                  setMode("decode");
                  setInput("");
                  setOutput("");
                  setStatus(null);
                }}
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition ${
                  mode === "decode"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                Decode
              </button>

            </div>
          </div>

          {/* Input */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-bold">
                  {mode === "encode" ? "Original Text or URL" : "Encoded URL"}
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  {mode === "encode"
                    ? "Enter the text or URL you want to encode."
                    : "Paste your encoded URL or text here."}
                </p>
              </div>

              <button
                onClick={clearAll}
                className="text-sm font-semibold text-red-500 hover:text-red-600"
              >
                Clear
              </button>
            </div>

            <textarea
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                setStatus(null);
              }}
              placeholder={
                mode === "encode"
                  ? "Example: https://example.com/search?q=hello world"
                  : "Paste your encoded text here..."
              }
              spellCheck="false"
              className="min-h-[220px] w-full resize-y p-6 font-mono text-sm leading-7 outline-none placeholder:text-slate-300"
            />

            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-400">
              <span>
                {mode === "encode" ? "Plain Text / URL" : "URL Encoded"}
              </span>

              <span>
                {input.length.toLocaleString()} characters
              </span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="my-5 flex flex-wrap justify-center gap-3">

            <button
              onClick={processText}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {mode === "encode" ? "Encode URL →" : "Decode URL →"}
            </button>

            <button
              onClick={swapMode}
              disabled={!output}
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ⇅ Swap
            </button>

          </div>

          {/* Output */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-bold">
                  {mode === "encode" ? "Encoded Output" : "Decoded Output"}
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Your conversion result will appear here.
                </p>
              </div>

              <button
                onClick={copyOutput}
                disabled={!output}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Copy Output
              </button>
            </div>

            <textarea
              value={output}
              readOnly
              spellCheck="false"
              placeholder="Your result will appear here..."
              className="min-h-[180px] w-full resize-y bg-slate-50 p-6 font-mono text-sm leading-7 outline-none placeholder:text-slate-300"
            />

            <div className="border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-400">
              {output.length.toLocaleString()} characters
            </div>

          </div>

          {/* Status */}
          {status && (
            <div
              role="status"
              className={`mt-5 rounded-xl border p-4 text-sm ${
                status.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              <strong>
                {status.type === "success" ? "Success: " : "Error: "}
              </strong>

              {status.message}
            </div>
          )}

          {/* Information */}
          <article className="mt-14 space-y-5">

            <h2 className="text-2xl font-bold">
              What Is URL Encoding?
            </h2>

            <p className="leading-7 text-slate-600">
              URL encoding, also known as percent encoding, is a
              method of converting characters into a format that
              can be safely used in URLs. Characters that have
              special meanings or are not allowed in certain URL
              contexts are represented using a percent sign
              followed by hexadecimal values.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              How Does URL Encoding Work?
            </h2>

            <p className="leading-7 text-slate-600">
              For example, a space character is converted into
              %20 when using component-based URL encoding.
              Special characters such as &, ?, and = are also
              converted when they are part of a URL component.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold">
                <span>Original</span>
                <span>Encoded</span>
              </div>

              {[
                ["Hello World", "Hello%20World"],
                ["hello@example.com", "hello%40example.com"],
                ["name=value", "name%3Dvalue"],
                ["JavaScript & HTML", "JavaScript%20%26%20HTML"],
              ].map(([original, encoded]) => (
                <div
                  key={original}
                  className="grid grid-cols-2 gap-3 border-b border-slate-100 px-4 py-3 text-xs last:border-0 sm:text-sm"
                >
                  <code className="break-all text-slate-600">
                    {original}
                  </code>

                  <code className="break-all text-blue-600">
                    {encoded}
                  </code>
                </div>
              ))}
            </div>

            <h2 className="pt-3 text-2xl font-bold">
              URL Encoding vs URL Decoding
            </h2>

            <p className="leading-7 text-slate-600">
              Encoding converts special characters into percent-encoded
              representations, while decoding reverses the process.
              Both operations are useful when working with query
              parameters, web forms, API requests, and dynamic URLs.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              When Should You Use a URL Encoder?
            </h2>

            <ul className="list-inside list-disc space-y-2 leading-7 text-slate-600">
              <li>Preparing search terms for URL query parameters.</li>
              <li>Working with API requests and web applications.</li>
              <li>Encoding special characters in URL components.</li>
              <li>Decoding percent-encoded URLs into readable text.</li>
              <li>Debugging URL parameters during development.</li>
            </ul>

            <h2 className="pt-3 text-2xl font-bold">
              Does This Tool Upload My Data?
            </h2>

            <p className="leading-7 text-slate-600">
              No. URL encoding and decoding are performed directly
              in your browser using JavaScript. Your input is not
              sent to a ToolNest server for processing.
            </p>

          </article>

        </div>
      </section>
    </main>
  );
}
