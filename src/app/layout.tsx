import Navbar from "../components/app/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import DoubleWaveFooter from "@/components/test/DoubleWaveFooter";
import Footer from "../components/app/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { clerkConfig } from "@/lib/clerkConfig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-magic-pattern ">
        <ClerkProvider publishableKey={clerkConfig.publishableKey}>
          <Navbar />
          {children}
          <Analytics />
          <DoubleWaveFooter />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
