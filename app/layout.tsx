import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Insurica – Smart Renewal Dashboard for Insurance Agents",
  description: "Track renewals, clients, commissions, and product brochures in one intelligent dashboard built for Indian insurance agents.",
  openGraph: {
    title: "Insurica – Smart Renewal Dashboard for Insurance Agents",
    description: "Track renewals, clients, commissions, and product brochures in one intelligent dashboard built for Indian insurance agents.",
    url: "https://www.insurica.in",
    siteName: "Insurica",
    type: "website",
    images: [
      {
        url: "https://www.insurica.in/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurica – Smart Renewal Dashboard for Insurance Agents",
    description: "Track renewals, clients, commissions, and product brochures in one intelligent dashboard built for Indian insurance agents.",
    images: ["https://www.insurica.in/og-image.jpg"],
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
