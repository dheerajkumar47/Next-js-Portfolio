import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dheeraj Kumar | AI Engineer — RAG, Agents & Computer Vision",
  description:
    "Dheeraj Kumar builds production AI: RAG chatbots, multi-agent workflows, WhatsApp and voice assistants, and real-time computer vision — on clean, tested backends.",
  openGraph: {
    title: "Dheeraj Kumar | AI Engineer",
    description: "AI that works in production, not just in the demo.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#00283f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
