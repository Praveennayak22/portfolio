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
  title: "Praveen Kumar | AI Systems & Full-Stack Web Developer",
  description:
    "AI Systems & Full-Stack Web Developer from IIT Gandhinagar. Certified in Supervised & Unsupervised Machine Learning (Stanford Online) and Web Application Development (University of London). I build modern Next.js/React web applications, LLM pipelines, and high-performance backend systems.",
  keywords: [
    "AI Systems Developer",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python Developer",
    "LLM Applications",
    "FastAPI",
    "Machine Learning",
    "MongoDB",
    "Stanford Certified",
    "IIT Gandhinagar",
    "Praveen Kumar",
  ],
  authors: [{ name: "Praveen Kumar" }],
  openGraph: {
    title: "Praveen Kumar | AI Systems & Full-Stack Web Developer",
    description:
      "I build modern full-stack web applications, AI-powered systems, and dependable backend pipelines. Next.js, React, FastAPI, PyTorch, MongoDB.",
    url: "https://portfolio-flax-five-26.vercel.app/",
    siteName: "Praveen Kumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Kumar | AI Systems & Full-Stack Web Developer",
    description:
      "I build modern full-stack web applications, AI-powered systems, and dependable backend pipelines.",
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
