
import HomePage from "./home-page";

export const metadata = {
  title: "ToolNest - Free Online Tools for Everyday Tasks",
  description:
    "Discover free online tools for developers and everyday tasks. Count words, generate QR codes, format JSON, encode Base64, create passwords, and more.",
  keywords: [
    "free online tools",
    "online developer tools",
    "word counter",
    "QR code generator",
    "JSON formatter",
    "Base64 encoder",
    "password generator",
    "URL encoder",
    "free web tools",
  ],
  openGraph: {
    title: "ToolNest - Free Online Tools for Everyday Tasks",
    description:
      "Use free online tools for text, development, security, and productivity. Simple, fast, and easy to use.",
    siteName: "ToolNest",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomePage />;
}
