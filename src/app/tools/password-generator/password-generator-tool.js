
"use client";

import { useState } from "react";

const CHARACTERS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function secureRandom(max) {
  const maxUint = 0x100000000;
  const limit = maxUint - (maxUint % max);

  const randomValues = new Uint32Array(1);
  let value;

  do {
    crypto.getRandomValues(randomValues);
    value = randomValues[0];
  } while (value >= limit);

  return value % max;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = secureRandom(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function generatePassword(length, options) {
  const selectedGroups = Object.entries(options)
    .filter(([, enabled]) => enabled)
    .map(([key]) => CHARACTERS[key]);

  if (selectedGroups.length === 0) {
    throw new Error("Select at least one character type.");
  }

  if (length < selectedGroups.length) {
    throw new Error(
      "Password length is too short for the selected character types."
    );
  }

  const allCharacters = selectedGroups.join("");
  const password = [];

  // Ensure at least one character from each selected group
  selectedGroups.forEach((group) => {
    password.push(group[secureRandom(group.length)]);
  });

  // Fill remaining password length
  while (password.length < length) {
    password.push(
      allCharacters[secureRandom(allCharacters.length)]
    );
  }

  return shuffleArray(password).join("");
}

function getStrength(length, options) {
  const selectedCount = Object.values(options).filter(Boolean).length;

  const score =
    (length >= 12 ? 1 : 0) +
    (length >= 16 ? 1 : 0) +
    (length >= 24 ? 1 : 0) +
    (selectedCount >= 3 ? 1 : 0) +
    (selectedCount === 4 ? 1 : 0);

  if (score <= 1) {
    return {
      label: "Weak",
      color: "bg-red-500",
      width: "20%",
    };
  }

  if (score <= 2) {
    return {
      label: "Fair",
      color: "bg-orange-500",
      width: "40%",
    };
  }

  if (score <= 3) {
    return {
      label: "Good",
      color: "bg-yellow-500",
      width: "60%",
    };
  }

  if (score <= 4) {
    return {
      label: "Strong",
      color: "bg-blue-500",
      width: "80%",
    };
  }

  return {
    label: "Very Strong",
    color: "bg-green-500",
    width: "100%",
  };
}

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);

  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const strength = getStrength(length, options);

  function toggleOption(key) {
    setOptions((current) => ({
      ...current,
      [key]: !current[key],
    }));

    setPassword("");
    setStatus("");
  }

  function handleGenerate() {
    try {
      const result = generatePassword(length, options);

      setPassword(result);
      setStatus("Password generated successfully.");
    } catch (error) {
      setPassword("");
      setStatus(error.message);
    }
  }

  async function copyPassword() {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setStatus("Password copied to clipboard.");
    } catch {
      setStatus("Unable to copy password. Please copy it manually.");
    }
  }

  function clearPassword() {
    setPassword("");
    setStatus("");
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">

          {/* Heading */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-600">
              Security Tools
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              Password Generator
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Create strong and random passwords to help protect
              your online accounts. Customize your password length
              and character types in seconds.
            </p>
          </div>

          {/* Generator Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            {/* Password Output */}
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700">
                  Generated Password
                </label>

                <button
                  onClick={clearPassword}
                  className="text-xs font-semibold text-red-500 hover:text-red-600"
                >
                  Clear
                </button>
              </div>

              <div className="flex min-h-[68px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="min-w-0 flex-1 break-all font-mono text-lg font-semibold tracking-wide text-slate-800">
                  {password || (
                    <span className="text-sm font-normal text-slate-400">
                      Your password will appear here...
                    </span>
                  )}
                </div>

                <button
                  onClick={copyPassword}
                  disabled={!password}
                  title="Copy password"
                  className="shrink-0 rounded-lg border border-slate-200 bg-white p-3 text-slate-500 transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="8" y="8" width="13" height="13" rx="2" />
                    <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
              </div>

              {/* Strength */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-500">
                    Password Strength
                  </span>

                  <span className="font-bold text-slate-700">
                    {password ? strength.label : "Not generated"}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full transition-all ${password ? strength.color : "bg-slate-200"}`}
                    style={{
                      width: password ? strength.width : "0%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Length */}
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <label
                  htmlFor="password-length"
                  className="font-bold text-slate-700"
                >
                  Password Length
                </label>

                <span className="rounded-lg bg-blue-50 px-4 py-2 text-lg font-bold text-blue-600">
                  {length}
                </span>
              </div>

              <input
                id="password-length"
                type="range"
                min="8"
                max="64"
                value={length}
                onChange={(event) => {
                  setLength(Number(event.target.value));
                  setPassword("");
                  setStatus("");
                }}
                className="w-full cursor-pointer accent-blue-600"
              />

              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>8 characters</span>
                <span>64 characters</span>
              </div>
            </div>

            {/* Character Options */}
            <div className="mb-8">
              <h2 className="mb-4 font-bold text-slate-700">
                Character Types
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  {
                    key: "uppercase",
                    title: "Uppercase Letters",
                    example: "A - Z",
                  },
                  {
                    key: "lowercase",
                    title: "Lowercase Letters",
                    example: "a - z",
                  },
                  {
                    key: "numbers",
                    title: "Numbers",
                    example: "0 - 9",
                  },
                  {
                    key: "symbols",
                    title: "Symbols",
                    example: "! @ # $ %",
                  },
                ].map((item) => (
                  <label
                    key={item.key}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                      options[item.key]
                        ? "border-blue-200 bg-blue-50/50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={options[item.key]}
                      onChange={() => toggleOption(item.key)}
                      className="h-5 w-5 accent-blue-600"
                    />

                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-slate-700">
                        {item.title}
                      </span>

                      <span className="mt-1 block text-xs text-slate-400">
                        {item.example}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
            >
              Generate Password
            </button>

            {/* Status */}
            {status && (
              <p
                role="status"
                className={`mt-4 rounded-lg p-3 text-center text-sm ${
                  status.includes("successfully") ||
                  status.includes("copied")
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status}
              </p>
            )}

            <p className="mt-5 text-center text-xs leading-6 text-slate-400">
              Passwords are generated locally in your browser.
              Your password is not uploaded to our server.
            </p>
          </div>

          {/* Information */}
          <article className="mt-14 space-y-5">

            <h2 className="text-2xl font-bold">
              What Is a Password Generator?
            </h2>

            <p className="leading-7 text-slate-600">
              A password generator is a tool that creates random
              passwords using different combinations of letters,
              numbers, and symbols. It helps users create passwords
              that are harder to guess than common words or simple
              character combinations.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              How to Create a Strong Password
            </h2>

            <p className="leading-7 text-slate-600">
              Use a password that is long, unique, and difficult
              to predict. A password of at least 16 characters
              with a combination of uppercase letters, lowercase
              letters, numbers, and symbols is a good starting point.
            </p>

            <ul className="list-inside list-disc space-y-2 leading-7 text-slate-600">
              <li>Use a different password for every account.</li>
              <li>Avoid names, birthdays, and common words.</li>
              <li>Prefer longer passwords whenever possible.</li>
              <li>Store passwords in a trusted password manager.</li>
              <li>Enable two-factor authentication when available.</li>
            </ul>

            <h2 className="pt-3 text-2xl font-bold">
              Is This Password Generator Secure?
            </h2>

            <p className="leading-7 text-slate-600">
              This tool uses the browser's Web Crypto API to
              generate random values. Password generation happens
              locally in your browser, and the generated password
              is not sent to our server.
            </p>

            <h2 className="pt-3 text-2xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-slate-800">
                  How long should my password be?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  A longer password is generally harder to guess.
                  Consider using at least 16 characters when the
                  service allows it.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  Can I use symbols in my password?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Symbols add more possible character
                  combinations, although password length and
                  uniqueness are also important.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  Does ToolNest save generated passwords?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. This tool does not send generated passwords
                  to a ToolNest server or store them in an account.
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>
    </main>
  );
}
