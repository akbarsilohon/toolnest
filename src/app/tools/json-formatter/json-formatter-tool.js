
"use client";

import { useState } from "react";

export default function JSONFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState("2");
  const [mode, setMode] = useState("format");
  const [status, setStatus] = useState(null);

  function processJSON(selectedMode = mode) {
    if (!input.trim()) {
      setOutput("");
      setStatus({
        type: "error",
        message: "Please enter some JSON data first.",
      });
      return;
    }

    try {
      const parsed = JSON.parse(input);

      const result =
        selectedMode === "minify"
          ? JSON.stringify(parsed)
          : JSON.stringify(parsed, null, Number(indent));

      setOutput(result);
      setMode(selectedMode);
      setStatus({
        type: "success",
        message:
          selectedMode === "minify"
            ? "JSON successfully minified."
            : "Valid JSON! Formatting completed.",
      });
    } catch (error) {
      setOutput("");
      setStatus({
        type: "error",
        message: error.message,
      });
    }
  }

  async function copyOutput() {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setStatus({
        type: "success",
        message: "Output copied to clipboard.",
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
    setMode("format");
  }

  function loadExample() {
    const example = {
      name: "ToolNest",
      description: "Free online developer tools",
      version: "1.0.0",
      features: [
        "JSON Formatter",
        "Word Counter",
        "QR Code Generator",
      ],
      settings: {
        free: true,
        registrationRequired: false,
        languages: ["JavaScript", "HTML", "CSS"],
      },
    };

    setInput(JSON.stringify(example));
    setOutput("");
    setStatus(null);
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
              Developer Tools
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              JSON Formatter
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Format, validate, and minify JSON data instantly. Make
              complicated JSON structures easier to read and understand.
            </p>
          </div>

          {/* Toolbar */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => processJSON("format")}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Format JSON
              </button>

              <button
                onClick={() => processJSON("minify")}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
              >
                Minify JSON
              </button>

              <button
                onClick={() => processJSON("format")}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
              >
                Validate
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="indent" className="text-sm text-slate-500">
                Indent:
              </label>

              <select
                id="indent"
                value={indent}
                onChange={(event) => setIndent(event.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-400"
              >
                <option value="2">2 Spaces</option>
                <option value="4">4 Spaces</option>
              </select>
            </div>
          </div>

          {/* Editor */}
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Input */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div>
                  <h2 className="font-bold">Input JSON</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Paste your JSON data here.
                  </p>
                </div>

                <button
                  onClick={loadExample}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Load Example
                </button>
              </div>

              <textarea
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                  setStatus(null);
                }}
                placeholder={'{\n  "name": "ToolNest"\n}'}
                spellCheck="false"
                className="min-h-[400px] w-full resize-y bg-[#0f172a] p-5 font-mono text-sm leading-7 text-green-300 outline-none placeholder:text-slate-600"
              />

              <div className="border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-400">
                {input.length.toLocaleString()} characters
              </div>
            </div>

            {/* Output */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div>
                  <h2 className="font-bold">Formatted Output</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Your processed JSON appears here.
                  </p>
                </div>

                <button
                  onClick={copyOutput}
                  disabled={!output}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Copy Output
                </button>
              </div>

              <textarea
                value={output}
                readOnly
                spellCheck="false"
                placeholder="Formatted JSON will appear here..."
                className="min-h-[400px] w-full resize-y bg-[#0f172a] p-5 font-mono text-sm leading-7 text-blue-300 outline-none placeholder:text-slate-600"
              />

              <div className="border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-400">
                {output.length.toLocaleString()} characters
              </div>
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

          {/* Clear */}
          <div className="mt-5 flex justify-end">
            <button
              onClick={clearAll}
              className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Clear All
            </button>
          </div>

          {/* Information */}
          <article className="mt-14 space-y-5">
            <h2 className="text-2xl font-bold">
              What Is a JSON Formatter?
            </h2>

            <p className="leading-7 text-slate-600">
              JSON (JavaScript Object Notation) is a lightweight data
              format commonly used to exchange information between
              applications, APIs, and web services. JSON Formatter helps
              developers organize JSON data into a readable structure.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              JSON Formatter Features
            </h2>

            <ul className="list-inside list-disc space-y-2 leading-7 text-slate-600">
              <li>
                Format JSON with consistent indentation.
              </li>
              <li>
                Minify JSON to remove unnecessary whitespace.
              </li>
              <li>
                Validate JSON syntax and identify parsing errors.
              </li>
              <li>
                Copy formatted output with one click.
              </li>
            </ul>

            <h2 className="pt-3 text-2xl font-bold">
              Is My JSON Data Safe?
            </h2>

            <p className="leading-7 text-slate-600">
              Yes. JSON processing happens locally in your browser using
              JavaScript. Your input is not uploaded to a ToolNest server.
              Avoid sharing sensitive information when using any online
              tool on a shared or untrusted device.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
