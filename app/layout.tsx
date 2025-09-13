import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import Loading from "@/app/loading";
import AppProvider from "@/components/app-provider";

export const metadata: Metadata = {
  title: "Portfolio - Pham Phuc Binh",
  description:
    "Personal portfolio of Pham Phuc Binh, a passionate developer specializing in Next.js, React, and Java Spring Boot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
