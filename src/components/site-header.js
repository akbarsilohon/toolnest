
import Link from "next/link";

export default function SiteHeader({ variant = "home" }) {
  const isToolPage = variant === "tool";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            T
          </div>

          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Tool<span className="text-blue-600">Nest</span>
          </span>
        </Link>

        {/* Homepage Navigation */}
        {!isToolPage && (
          <>
            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="#tools"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                All Tools
              </a>

              <a
                href="#categories"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                Categories
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                About
              </a>
            </nav>

            <a
              href="#tools"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Tools
            </a>
          </>
        )}

        {/* Tool Page Navigation */}
        {isToolPage && (
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            &larr; Back to Home
          </Link>
        )}

      </div>
    </header>
  );
}
