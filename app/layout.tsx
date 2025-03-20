import type { Metadata } from "next";
import "./globals.css";

/** App metadata. */
export const metadata: Metadata = {
  title: "Weather Monitor",
  description: "Real-time weather data for selected locations.",
};

/**
 * Root layout component.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body aria-live="polite">{children}</body>
    </html>
  );
}
