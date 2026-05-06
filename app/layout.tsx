import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartDeskAI",
  description: "Yapay zeka destekli mail ve evrak iş akışı paneli"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
