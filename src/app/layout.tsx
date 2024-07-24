// src/app/layout.tsx

import Navbar from "../components/app/Navbar";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"; 
import ClerkWrapper from "@/clerk"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkWrapper>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
          </ThemeProvider>
        </ClerkWrapper>
      </body>
    </html>
  );
}
