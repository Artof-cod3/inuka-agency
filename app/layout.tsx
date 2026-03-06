import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INUKA Marketing Agency | We Make Brands Rise",
  description: "We help small local businesses across Kenya build a powerful digital presence — so your customers can find you, trust you, and choose you.",
  keywords: "marketing agency, Kenya, digital marketing, SEO, social media, small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#0f0f0f] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}