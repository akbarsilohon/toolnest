
import QRCodeTool from "./qr-code-tool";

export const metadata = {
  title: "Free QR Code Generator - Create QR Codes Online | ToolNest",
  description:
    "Create custom QR codes online for free with ToolNest. Generate QR codes from URLs, text, and other content. Customize colors, choose sizes, and download as PNG.",
  keywords: [
    "QR code generator",
    "free QR code generator",
    "QR code maker",
    "create QR code online",
    "custom QR code generator",
    "QR code PNG download",
    "online QR generator",
  ],
  openGraph: {
    title: "Free QR Code Generator Online | ToolNest",
    description:
      "Generate custom QR codes for free. Enter text or a URL, customize your QR code, and download it as a PNG image.",
    siteName: "ToolNest",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <QRCodeTool />;
}
