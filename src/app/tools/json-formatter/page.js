
import JSONFormatterTool from "./json-formatter-tool";

export const metadata = {
  title: "JSON Formatter & Validator - Free Online JSON Tool | ToolNest",
  description:
    "Format, validate, and minify JSON online with ToolNest's free JSON Formatter. Fix indentation, check syntax, and copy clean JSON instantly.",
  keywords: [
    "JSON formatter",
    "JSON validator",
    "JSON beautifier",
    "JSON minifier",
    "format JSON online",
    "validate JSON",
    "JSON tool",
  ],
  openGraph: {
    title: "Free JSON Formatter & Validator | ToolNest",
    description:
      "Format, validate, and minify JSON data online. Free, fast, and easy to use.",
    siteName: "ToolNest",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <JSONFormatterTool />;
}
