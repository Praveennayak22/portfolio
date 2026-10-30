import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praveen Kumar | AI & Python Developer",
  description:
    "AI & Python Developer from IIT Gandhinagar. I build LLM applications, Python automation, FastAPI backends, and ML systems. Open to freelance projects worldwide.",
  keywords: [
    "AI Developer",
    "Python Developer",
    "LLM Applications",
    "FastAPI",
    "Machine Learning",
    "Freelance AI Engineer",
    "IIT Gandhinagar",
    "Praveen Kumar",
  ],
  authors: [{ name: "Praveen Kumar" }],
  openGraph: {
    title: "Praveen Kumar | AI & Python Developer",
    description:
      "I build AI-powered tools and dependable Python systems. LLM apps, automation, FastAPI, ML.",
    url: "https://praveenkumar.dev",
    siteName: "Praveen Kumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Kumar | AI & Python Developer",
    description:
      "I build AI-powered tools and dependable Python systems. LLM apps, automation, FastAPI, ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
