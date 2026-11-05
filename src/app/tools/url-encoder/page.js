
import URLEncoderTool from "./url-encoder-tool";

export const metadata = {
  title: "URL Encoder & Decoder - Free Online URL Tool | ToolNest",
  description:
    "Free online URL Encoder and Decoder. Encode special characters in URLs or decode percent-encoded text quickly and easily.",
  keywords: [
    "URL encoder",
    "URL decoder",
    "encode URL online",
    "decode URL online",
    "URL encoding tool",
    "percent encoding",
    "URL converter",
    "encodeURIComponent",
  ],
  openGraph: {
    title: "Free URL Encoder & Decoder | ToolNest",
    description:
      "Encode special characters in URLs or decode percent-encoded text online. Free, fast, and easy to use.",
    siteName: "ToolNest",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <URLEncoderTool />;
}
