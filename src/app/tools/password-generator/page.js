
import PasswordGeneratorTool from "./password-generator-tool";

export const metadata = {
  title: "Password Generator - Create Strong Random Passwords | ToolNest",
  description:
    "Generate secure random passwords online with customizable length, letters, numbers, and symbols. Free password generator by ToolNest.",
  keywords: [
    "password generator",
    "random password generator",
    "strong password generator",
    "secure password generator",
    "generate password online",
    "random password maker",
    "free password generator",
  ],
  openGraph: {
    title: "Free Password Generator | ToolNest",
    description:
      "Generate strong random passwords with customizable length, uppercase letters, lowercase letters, numbers, and symbols.",
    siteName: "ToolNest",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PasswordGeneratorTool />;
}
