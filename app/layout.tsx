import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { PremiumProvider } from "@/lib/premium-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InfraHub • The Elite Platform for Smart Public Works Infrastructure",
  description: "The definitive curated marketplace for real smart technology products powering public works and transportation infrastructure. Verified deployments, performance data, and certified contractors with unmatched depth in Massachusetts, New Hampshire, and Maine.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070F] text-[#F1F5F9]">
        <PremiumProvider>
          {children}
        </PremiumProvider>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
