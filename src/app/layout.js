// src/app/layout.js

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: {
    default: "ToolNest - Free Online Tools",
    template: "%s | ToolNest",
  },
  description:
    "Free online tools for developers and everyday tasks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />

        <main>
          {children}
        </main>

        <SiteFooter />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}