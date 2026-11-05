
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                T
              </div>

              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Tool<span className="text-blue-600">Nest</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              Free online tools designed to make everyday tasks easier.
              Simple, fast, and accessible directly from your browser.
            </p>
          </div>

          {/* Tools Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Popular Tools
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/tools/word-counter" className="transition hover:text-blue-600">
                  Word Counter
                </Link>
              </li>

              <li>
                <Link href="/tools/qr-code-generator" className="transition hover:text-blue-600">
                  QR Code Generator
                </Link>
              </li>

              <li>
                <Link href="/tools/json-formatter" className="transition hover:text-blue-600">
                  JSON Formatter
                </Link>
              </li>

              <li>
                <Link href="/tools/base64-encoder" className="transition hover:text-blue-600">
                  Base64 Encoder & Decoder
                </Link>
              </li>

              <li>
                <Link href="/tools/password-generator" className="transition hover:text-blue-600">
                  Password Generator
                </Link>
              </li>

              <li>
                <Link href="/tools/url-encoder" className="transition hover:text-blue-600">
                  URL Encoder & Decoder
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Information
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/about" className="transition hover:text-blue-600">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-blue-600">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="transition hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-of-service" className="transition hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-500">
            © 2026 ToolNest. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
