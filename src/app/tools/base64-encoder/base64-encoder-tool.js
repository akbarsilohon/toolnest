
"use client";

import { useState } from "react";

export default function Base64EncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [status, setStatus] = useState(null);

  // Convert UTF-8 text to Base64
  function encodeBase64(value) {
    const bytes = new TextEncoder().encode(value);
    let binary = "";

    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });

    return btoa(binary);
  }

  // Convert Base64 to UTF-8 text
  function decodeBase64(value) {
    const normalized = value.replace(/\s/g, "");

    if (!normalized) return "";

    if (
      !/^[A-Za-z0-9+/]*={0,2}$/.test(normalized) ||
      normalized.length % 4 !== 0
    ) {
      throw new Error("Invalid Base64 format.");
    }

    const binary = atob(normalized);
    const bytes = Uint8Array.from(
      binary,
      (character) => character.charCodeAt(0)
    );

    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  }

  function processText() {
    if (!input.trim()) {
      setOutput("");
      setStatus({
        type: "error",
        message: "Please enter some text first.",
      });
      return;
    }

    try {
      const result =
        mode === "encode"
          ? encodeBase64(input)
          : decodeBase64(input);

      setOutput(result);
      setStatus({
        type: "success",
        message:
          mode === "encode"
            ? "Text successfully encoded to Base64."
            : "Base64 successfully decoded to text.",
      });
    } catch {
      setOutput("");
      setStatus({
        type: "error",
        message:
          mode === "decode"
            ? "Invalid Base64 input or the decoded data is not valid UTF-8."
            : "Unable to encode the input.",
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
    setMode((current) =>
      current === "encode" ? "decode" : "encode"
    );

    setInput(output);
    setOutput("");
    setStatus(null);
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
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-600">
              Developer Tools
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              Base64 Encoder & Decoder
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Encode text into Base64 or decode Base64 strings back into
              readable text. Fast, simple, and completely free.
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
                  {mode === "encode" ? "Plain Text" : "Base64 Input"}
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  {mode === "encode"
                    ? "Enter the text you want to encode."
                    : "Paste your Base64 string here."}
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
                  ? "Enter your text here..."
                  : "Paste your Base64 string here..."
              }
              spellCheck="false"
              className="min-h-[220px] w-full resize-y p-6 font-mono text-sm leading-7 outline-none placeholder:text-slate-300"
            />

            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-400">
              <span>{mode === "encode" ? "UTF-8 Text" : "Base64"}</span>
              <span>{input.length.toLocaleString()} characters</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="my-5 flex flex-wrap justify-center gap-3">
            <button
              onClick={processText}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {mode === "encode" ? "Encode to Base64 →" : "Decode to Text →"}
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
                  {mode === "encode" ? "Base64 Output" : "Decoded Text"}
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
              What Is Base64 Encoding?
            </h2>

            <p className="leading-7 text-slate-600">
              Base64 is an encoding method that converts binary data into
              ASCII text using 64 characters. It is commonly used in web
              development, email systems, data transmission, and APIs.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              How to Use the Base64 Tool
            </h2>

            <ol className="list-inside list-decimal space-y-2 leading-7 text-slate-600">
              <li>Select Encode or Decode mode.</li>
              <li>Enter your text or Base64 string.</li>
              <li>Click the conversion button.</li>
              <li>Copy the result when the conversion is complete.</li>
            </ol>

            <h2 className="pt-3 text-2xl font-bold">
              Is Base64 Encryption Secure?
            </h2>

            <p className="leading-7 text-slate-600">
              No. Base64 is an encoding format, not encryption. Anyone can
              decode a Base64 string without a secret key. Do not use
              Base64 to protect passwords, confidential information, or
              sensitive data.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              Does This Tool Upload My Data?
            </h2>

            <p className="leading-7 text-slate-600">
              No. Encoding and decoding are performed directly in your
              browser using JavaScript. Your input is not sent to a
              ToolNest server for processing.
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© 2026 ToolNest. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
