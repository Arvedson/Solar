import Navbar from "../components/app/Navbar";
import "./globals.css";

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
      <body>
        <ClerkProvider publishableKey={clerkConfig.publishableKey}>
          <Navbar />
          {children}
          <DoubleWaveFooter />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
