"use client"

import Navbar from "../components/app/Navbar";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

export default function ClientRouterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
