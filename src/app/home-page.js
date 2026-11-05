
"use client";

import { useState } from "react";
import Link from "next/link";

const tools = [
  {
    name: "Word Counter",
    description: "Hitung jumlah kata, karakter, dan kalimat.",
    category: "Text Tools",
    icon: "📝",
    color: "bg-blue-100",
    slug: "word-counter",
  },
  {
    name: "QR Code Generator",
    description: "Buat QR Code dari teks atau URL dengan mudah.",
    category: "Generator",
    icon: "▦",
    color: "bg-purple-100",
    slug: "qr-code-generator",
  },
  {
    name: "JSON Formatter",
    description: "Rapikan dan validasi format JSON.",
    category: "Developer Tools",
    icon: "{ }",
    color: "bg-orange-100",
    slug: "json-formatter",
  },
  {
    name: "Base64 Encoder",
    description: "Encode dan decode teks menggunakan Base64.",
    category: "Developer Tools",
    icon: "🔐",
    color: "bg-green-100",
    slug: "base64-encoder",
  },
  {
    name: "Password Generator",
    description: "Buat password acak yang kuat dan aman.",
    category: "Generator",
    icon: "🔑",
    color: "bg-yellow-100",
    slug: "password-generator",
  },
  {
    name: "URL Encoder",
    description: "Encode dan decode URL dengan cepat.",
    category: "Developer Tools",
    icon: "🔗",
    color: "bg-pink-100",
    slug: "url-encoder",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    `${tool.name} ${tool.description} ${tool.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* Hero */}
      <section className="px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
            ✨ Simple tools. Smarter work.
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Everything You Need,
            <span className="block text-blue-600">
              All in One Place.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Discover free online tools that make your everyday tasks easier.
            Fast, simple, and accessible whenever you need them.
          </p>

          <div className="mx-auto mt-9 flex max-w-xl items-center rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50 focus-within:border-blue-400">
            <span className="px-3 text-xl text-slate-400">⌕</span>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a tool..."
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
            />

            <button
              onClick={() => setSearch("")}
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Clear
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Free to use · No registration required
          </p>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="mx-auto max-w-7xl px-6 pb-24"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              EXPLORE OUR COLLECTION
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Popular Tools
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Useful tools to simplify your daily tasks.
            </p>
          </div>

          <span className="text-sm text-slate-400">
            {filteredTools.length} tools available
          </span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <Link
                href={`/tools/${tool.slug}`}
                key={tool.slug}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${tool.color}`}
                >
                  {tool.icon}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {tool.category}
                </p>

                <h3 className="mt-2 text-lg font-bold group-hover:text-blue-600">
                  {tool.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {tool.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Open Tool
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <p className="text-lg font-semibold">
              No tools found
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-slate-200 bg-white px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">
            Tools That Make Life Easier
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            ToolNest brings together practical online utilities in one
            convenient place. Our goal is to make everyday digital tasks
            simpler, faster, and more accessible for everyone.
          </p>
        </div>
      </section>

    </main>
  );
}
