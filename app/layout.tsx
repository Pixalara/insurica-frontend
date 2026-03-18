import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insurica.in"),
  title: "Insurica | The Intelligent Renewal Dashboard for Modern Agents",
  description: "Ditch the spreadsheets and scale your portfolio with Insurica. Securely track renewals, clients, and commissions in one simple, high-tech dashboard.",
  keywords: ["insurance dashboard", "renewal tracking", "insurance agents india", "portfolio management", "pixalara"],
  openGraph: {
    title: "Insurica | The Intelligent Renewal Dashboard for Modern Agents",
    description: "Empower your agency. Securely track renewals, clients, and commissions with a futuristic dashboard engineered for growth.",
    url: "https://insurica.in",
    siteName: "Insurica",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Insurica - Digital Experiences. Engineered to Scale.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurica | The Intelligent Renewal Dashboard for Modern Agents",
    description: "The simplest, most secure way to manage your insurance portfolio and automate renewals.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
