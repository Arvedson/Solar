// src/clerk.tsx
"use client"
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

interface ClerkWrapperProps {
  children: ReactNode;
}

const ClerkWrapper = ({ children }: ClerkWrapperProps) => (
  <ClerkProvider>{children}</ClerkProvider>
);

export default ClerkWrapper;
