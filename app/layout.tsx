import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wandering Wine Co. | San Antonio",
  description:
    "Curated wine and beverage experiences connecting San Antonio hospitality, producers, and curious guests.",
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
