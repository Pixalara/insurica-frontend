import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insurica.in"),
  title: "Insurica | Professional Insurance Portfolio Management",
  description: "Experience the future of insurance agency management. Insurica's intelligent dashboard automates your renewals, streamlines client data, and tracks commissions with bank-grade security.",
  keywords: ["insurance dashboard", "SaaS", "agency management", "renewal tracking", "india insurtech"],
  openGraph: {
    title: "Insurica | Professional Insurance Portfolio Management",
    description: "Empower your agency with the ultimate digital dashboard. Transform your offline diary into a secure, intelligent, and scalable insurance portfolio.",
    url: "https://insurica.in",
    siteName: "Insurica Dashboard",
    images: [
      {
        url: "/og.png", // Next.js will resolve this to https://insurica.in/og.png
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Insurica Premium Dashboard Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurica | Professional Insurance Portfolio Management",
    description: "The simplest, most secure way to manage your insurance portfolio and automate renewals.",
    images: ["/og.png"],
    creator: "@insurica",
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
