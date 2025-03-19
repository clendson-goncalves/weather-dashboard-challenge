import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather Monitor",
  description: "Real-time weather data for Joinville/SC (Brazil), San Francisco/CA (USA), and Urubici/SC (Brazil)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
