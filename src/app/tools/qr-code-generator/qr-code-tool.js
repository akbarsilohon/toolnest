
"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QRCodeGeneratorPage() {
  const [text, setText] = useState("");
  const [size, setSize] = useState("300");
  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#ffffff");
  const [qrCode, setQrCode] = useState("");
  const [error, setError] = useState("");
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function generateQR() {
      if (!text.trim()) {
        setQrCode("");
        setError("");
        setGenerating(false);
        return;
      }

      setGenerating(true);
      setError("");

      try {
        const result = await QRCode.toDataURL(text, {
          width: Number(size),
          margin: 2,
          errorCorrectionLevel: "H",
          color: {
            dark: foreground,
            light: background,
          },
        });

        if (!cancelled) {
          setQrCode(result);
          setGenerating(false);
        }
      } catch {
        if (!cancelled) {
          setQrCode("");
          setError("Unable to generate QR Code. Please try again.");
          setGenerating(false);
        }
      }
    }

    generateQR();

    return () => {
      cancelled = true;
    };
  }, [text, size, foreground, background]);

  function downloadQR() {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "toolnest-qr-code.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function clearForm() {
    setText("");
    setSize("300");
    setForeground("#000000");
    setBackground("#ffffff");
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
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-600">
              Generator Tools
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              QR Code Generator
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Create custom QR codes from any text or URL. Customize colors,
              choose your preferred size, and download your QR code instantly.
            </p>
          </div>

          {/* Generator */}
          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            {/* Input Panel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5">
                <h2 className="text-lg font-bold">QR Code Content</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter the text or URL you want to convert.
                </p>
              </div>

              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="https://example.com"
                rows={5}
                maxLength={3000}
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 outline-none transition focus:border-blue-400 focus:bg-white"
              />

              <div className="mt-2 text-right text-xs text-slate-400">
                {text.length} / 3000 characters
              </div>

              {/* Size */}
              <div className="mt-7">
                <label className="mb-2 block text-sm font-semibold">
                  QR Code Size
                </label>

                <select
                  value={size}
                  onChange={(event) => setSize(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400"
                >
                  <option value="200">Small (200 × 200 px)</option>
                  <option value="300">Medium (300 × 300 px)</option>
                  <option value="500">Large (500 × 500 px)</option>
                  <option value="800">Extra Large (800 × 800 px)</option>
                </select>
              </div>

              {/* Colors */}
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    QR Code Color
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                    <input
                      type="color"
                      value={foreground}
                      onChange={(event) =>
                        setForeground(event.target.value)
                      }
                      className="h-9 w-12 cursor-pointer rounded"
                    />
                    <span className="text-sm text-slate-500">
                      {foreground.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Background Color
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                    <input
                      type="color"
                      value={background}
                      onChange={(event) =>
                        setBackground(event.target.value)
                      }
                      className="h-9 w-12 cursor-pointer rounded"
                    />
                    <span className="text-sm text-slate-500">
                      {background.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={clearForm}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Clear All
                </button>

                <button
                  onClick={downloadQR}
                  disabled={!qrCode || generating}
                  className="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ↓ Download PNG
                </button>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h2 className="text-lg font-bold">QR Code Preview</h2>

              <p className="mt-1 text-sm text-slate-500">
                Your QR code will appear here.
              </p>

              <div className="mt-7 flex aspect-square w-full max-w-[280px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5">
                {generating ? (
                  <div className="text-sm text-slate-400">
                    Generating QR Code...
                  </div>
                ) : qrCode ? (
                  <img
                    src={qrCode}
                    alt="Generated QR Code"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-6xl text-slate-300">▦</div>
                    <p className="mt-4 text-sm text-slate-400">
                      Enter text or URL to generate QR Code.
                    </p>
                  </div>
                )}
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-500">{error}</p>
              )}

              <p className="mt-6 text-xs text-slate-400">
                PNG format · High error correction
              </p>
            </div>
          </div>

          {/* Information */}
          <article className="mt-14 space-y-5">
            <h2 className="text-2xl font-bold">
              What Is a QR Code Generator?
            </h2>

            <p className="leading-7 text-slate-600">
              A QR Code Generator is an online tool that converts text,
              website addresses, and other information into a scannable
              Quick Response code. Anyone with a smartphone camera or QR
              scanner can scan the code to access the encoded information.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              How to Create a QR Code
            </h2>

            <ol className="list-inside list-decimal space-y-2 leading-7 text-slate-600">
              <li>Enter your text or website URL.</li>
              <li>Choose your preferred QR code size.</li>
              <li>Customize the foreground and background colors.</li>
              <li>Preview the generated QR code.</li>
              <li>Click Download PNG to save your QR code.</li>
            </ol>

            <h2 className="pt-3 text-2xl font-bold">
              Is This QR Code Generator Free?
            </h2>

            <p className="leading-7 text-slate-600">
              Yes. ToolNest provides this QR code generator free of charge.
              You can create and download QR codes without creating an
              account. QR code generation happens directly in your browser.
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
