import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unsplash Collection",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased bg-cinzaClaro`}>{children}</body>
    </html>
  );
}
