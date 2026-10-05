import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wandering Wine Co. | San Antonio",
  description:
    "Wandering Wine Co. — wine, food, and discovery in San Antonio, Texas.",
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
