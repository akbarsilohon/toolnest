
import Base64EncoderTool from "./base64-encoder-tool";

export const metadata = {
  title: "Base64 Encoder & Decoder - Free Online Tool | ToolNest",
  description:
    "Encode text to Base64 or decode Base64 strings online with ToolNest. Supports UTF-8 characters and works directly in your browser.",
  keywords: [
    "Base64 encoder",
    "Base64 decoder",
    "encode Base64 online",
    "decode Base64 online",
    "Base64 converter",
    "Base64 encoding tool",
    "online Base64 tool",
  ],
  openGraph: {
    title: "Free Base64 Encoder & Decoder | ToolNest",
    description:
      "Encode text to Base64 or decode Base64 strings online. Free, fast, and supports UTF-8 characters.",
    siteName: "ToolNest",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Base64EncoderTool />;
}
