// src/app/layout.tsx

import Navbar from "../components/app/Navbar";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"; // Asegúrate de la ruta correcta

export default function RootLayout({
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
